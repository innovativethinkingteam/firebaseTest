"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deployToFunction = void 0;
const architect_1 = require("@angular-devkit/architect");
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const child_process_1 = require("child_process");
const functions_templates_1 = require("./functions-templates");
const schematics_1 = require("@angular-devkit/schematics");
const semver_1 = require("semver");
const open = require("open");
const escapeRegExp = (str) => str.replace(/[\-\[\]\/{}()*+?.\\^$|]/g, '\\$&');
const moveSync = (src, dest) => {
    fs_extra_1.copySync(src, dest);
    fs_extra_1.removeSync(src);
};
const deployToHosting = (firebaseTools, context, workspaceRoot, preview) => {
    if (preview) {
        const port = 5000;
        setTimeout(() => {
            open(`http://localhost:${port}`);
        }, 1500);
        return firebaseTools.serve({ port, targets: ['hosting'], host: 'localhost' }).then(() => require('inquirer').prompt({
            type: 'confirm',
            name: 'deployProject',
            message: 'Would you like to deploy your application to Firebase Hosting?'
        })).then(({ deployProject }) => {
            if (deployProject) {
                return firebaseTools.deploy({
                    only: 'hosting:' + context.target.project,
                    cwd: workspaceRoot
                });
            }
            else {
                return Promise.resolve();
            }
        });
    }
    else {
        return firebaseTools.deploy({
            only: 'hosting:' + context.target.project,
            cwd: workspaceRoot
        });
    }
};
const defaultFsHost = {
    moveSync,
    writeFileSync: fs_1.writeFileSync,
    renameSync: fs_1.renameSync
};
const getVersionRange = (v) => `^${v}.0.0`;
const findPackageVersion = (name) => {
    const match = child_process_1.execSync(`npm list ${name}`).toString().match(` ${escapeRegExp(name)}@.+\\w`);
    return match ? match[0].split(`${name}@`)[1] : null;
};
const getPackageJson = (context, workspaceRoot) => {
    const dependencies = {
        'firebase-admin': 'latest',
        'firebase-functions': 'latest'
    };
    const devDependencies = {
        'firebase-functions-test': 'latest'
    };
    Object.keys(dependencies).forEach((dependency) => {
        const packageVersion = findPackageVersion(dependency);
        if (packageVersion) {
            dependencies[dependency] = packageVersion;
        }
    });
    Object.keys(devDependencies).forEach((devDependency) => {
        const packageVersion = findPackageVersion(devDependency);
        if (packageVersion) {
            devDependencies[devDependency] = packageVersion;
        }
    });
    if (fs_1.existsSync(path_1.join(workspaceRoot, 'angular.json'))) {
        const angularJson = JSON.parse(fs_1.readFileSync(path_1.join(workspaceRoot, 'angular.json')).toString());
        const server = angularJson.projects[context.target.project].architect.server;
        const serverOptions = server && server.options;
        const externalDependencies = serverOptions && serverOptions.externalDependencies || [];
        const bundleDependencies = serverOptions && serverOptions.bundleDependencies;
        if (bundleDependencies !== true) {
            if (fs_1.existsSync(path_1.join(workspaceRoot, 'package.json'))) {
                const packageJson = JSON.parse(fs_1.readFileSync(path_1.join(workspaceRoot, 'package.json')).toString());
                Object.keys(packageJson.dependencies).forEach((dependency) => {
                    dependencies[dependency] = packageJson.dependencies[dependency];
                });
            }
        }
        else {
            externalDependencies.forEach(externalDependency => {
                const packageVersion = findPackageVersion(externalDependency);
                if (packageVersion) {
                    dependencies[externalDependency] = packageVersion;
                }
            });
        }
    }
    return functions_templates_1.defaultPackage(dependencies, devDependencies);
};
exports.deployToFunction = (firebaseTools, context, workspaceRoot, project, preview, fsHost = defaultFsHost) => __awaiter(void 0, void 0, void 0, function* () {
    if (!semver_1.satisfies(process.versions.node, getVersionRange(functions_templates_1.NODE_VERSION))) {
        context.logger.warn(`⚠️ Your Node.js version (${process.versions.node}) does not match the Firebase Functions runtime (${functions_templates_1.NODE_VERSION}).`);
    }
    if (!project ||
        !project.build ||
        !project.build.options ||
        !project.build.options.outputPath) {
        throw new schematics_1.SchematicsException(`Cannot read the output path (architect.build.options.outputPath) of the Angular project in angular.json`);
    }
    if (!project ||
        !project.server ||
        !project.server.options ||
        !project.server.options.outputPath) {
        throw new schematics_1.SchematicsException(`Cannot read the output path (architect.server.options.outputPath) of the Angular project in angular.json`);
    }
    const staticOut = project.build.options.outputPath;
    const serverOut = project.server.options.outputPath;
    const newClientPath = path_1.join(path_1.dirname(staticOut), staticOut);
    const newServerPath = path_1.join(path_1.dirname(serverOut), serverOut);
    fsHost.moveSync(staticOut, newClientPath);
    fsHost.moveSync(serverOut, newServerPath);
    fsHost.writeFileSync(path_1.join(path_1.dirname(serverOut), 'package.json'), getPackageJson(context, workspaceRoot));
    fsHost.writeFileSync(path_1.join(path_1.dirname(serverOut), 'index.js'), functions_templates_1.defaultFunction(serverOut));
    fsHost.renameSync(path_1.join(newClientPath, 'index.html'), path_1.join(newClientPath, 'index.original.html'));
    if (preview) {
        const port = 5000;
        setTimeout(() => {
            open(`http://localhost:${port}`);
        }, 1500);
        return firebaseTools.serve({ port, targets: ['hosting', 'functions'], host: 'localhost' }).then(() => require('inquirer').prompt({
            type: 'confirm',
            name: 'deployProject',
            message: 'Would you like to deploy your application to Firebase Hosting & Cloud Functions?'
        })).then(({ deployProject }) => {
            if (deployProject) {
                return firebaseTools.deploy({
                    only: `hosting:${context.target.project},functions:ssr`,
                    cwd: workspaceRoot
                });
            }
            else {
                return Promise.resolve();
            }
        });
    }
    else {
        return firebaseTools.deploy({
            only: `hosting:${context.target.project},functions:ssr`,
            cwd: workspaceRoot
        });
    }
});
function deploy(firebaseTools, context, projectTargets, buildTargets, firebaseProject, ssr, preview) {
    return __awaiter(this, void 0, void 0, function* () {
        yield firebaseTools.login();
        if (!context.target) {
            throw new Error('Cannot execute the build target');
        }
        context.logger.info(`📦 Building "${context.target.project}"`);
        for (const target of buildTargets) {
            const run = yield context.scheduleTarget(architect_1.targetFromTargetString(target.name), target.options);
            yield run.result;
        }
        try {
            yield firebaseTools.use(firebaseProject, { project: firebaseProject });
        }
        catch (e) {
            throw new Error(`Cannot select firebase project '${firebaseProject}'`);
        }
        try {
            const winston = require('winston');
            const tripleBeam = require('triple-beam');
            firebaseTools.logger.add(new winston.transports.Console({
                level: 'info',
                format: winston.format.printf((info) => [info.message, ...(info[tripleBeam.SPLAT] || [])]
                    .filter((chunk) => typeof chunk === 'string')
                    .join(' '))
            }));
            if (ssr) {
                yield exports.deployToFunction(firebaseTools, context, context.workspaceRoot, projectTargets, preview);
            }
            else {
                yield deployToHosting(firebaseTools, context, context.workspaceRoot, preview);
            }
        }
        catch (e) {
            context.logger.error(e.message || e);
        }
    });
}
exports.default = deploy;
