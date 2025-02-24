"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupUniversalDeployment = exports.addFirebaseFunctionsDependencies = exports.generateFirebaseJson = exports.isUniversalApp = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ng_add_common_1 = require("./ng-add-common");
const versions_json_1 = require("./versions.json");
const path_1 = require("path");
exports.isUniversalApp = (project) => project.architect && project.architect.server;
function emptyFirebaseJson(source) {
    return {
        hosting: [],
        functions: {
            source
        }
    };
}
function generateHostingConfig(project, dist) {
    return {
        target: project,
        public: path_1.join(path_1.dirname(dist), dist),
        ignore: ['**/.*'],
        headers: [{
                source: '*.[0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f][0-9a-f].+(css|js)',
                headers: [{
                        key: 'Cache-Control',
                        value: 'public,max-age=31536000,immutable'
                    }]
            }],
        rewrites: [
            {
                source: '**',
                function: 'ssr'
            }
        ]
    };
}
function generateFunctionsConfig(dist) {
    return {
        source: path_1.dirname(dist)
    };
}
function generateFirebaseJson(tree, path, project, dist, serverOutput) {
    const firebaseJson = tree.exists(path)
        ? ng_add_common_1.safeReadJSON(path, tree)
        : emptyFirebaseJson(path_1.dirname(serverOutput));
    const newConfig = generateHostingConfig(project, dist);
    if (firebaseJson.hosting === undefined) {
        firebaseJson.hosting = newConfig;
    }
    else if (Array.isArray(firebaseJson.hosting)) {
        const existingConfigIndex = firebaseJson.hosting.findIndex(config => config.target === newConfig.target);
        if (existingConfigIndex > -1) {
            firebaseJson.hosting.splice(existingConfigIndex, 1, newConfig);
        }
        else {
            firebaseJson.hosting.push(newConfig);
        }
    }
    else {
        firebaseJson.hosting = [firebaseJson.hosting, newConfig];
    }
    firebaseJson.functions = generateFunctionsConfig(dist);
    ng_add_common_1.overwriteIfExists(tree, path, ng_add_common_1.stringifyFormatted(firebaseJson));
}
exports.generateFirebaseJson = generateFirebaseJson;
exports.addFirebaseFunctionsDependencies = (tree, context) => {
    ng_add_common_1.addDependencies(tree, Object.assign(Object.assign({}, versions_json_1.default), versions_json_1.firebaseFunctions), context);
};
exports.setupUniversalDeployment = (config) => {
    const { tree, workspacePath, workspace, options } = config;
    const project = workspace.projects[options.project];
    if (!project.architect ||
        !project.architect.build ||
        !project.architect.build.options ||
        !project.architect.build.options.outputPath) {
        throw new schematics_1.SchematicsException(`Cannot read the output path (architect.build.options.outputPath) of the Angular project "${options.project}" in angular.json`);
    }
    if (!project.architect ||
        !project.architect.server ||
        !project.architect.server.options ||
        !project.architect.server.options.outputPath) {
        throw new schematics_1.SchematicsException(`Cannot read the output path (architect.server.options.outputPath) of the Angular project "${options.project}" in angular.json`);
    }
    const staticOutput = project.architect.build.options.outputPath;
    const serverOutput = project.architect.server.options.outputPath;
    const externalDependencies = project.architect.server.options.externalDependencies || [];
    [
        'firebase',
        '@firebase/app',
        '@firebase/analytics',
        '@firebase/app',
        '@firebase/auth',
        '@firebase/component',
        '@firebase/database',
        '@firebase/firestore',
        '@firebase/functions',
        '@firebase/installations',
        '@firebase/messaging',
        '@firebase/storage',
        '@firebase/performance',
        '@firebase/remote-config',
        '@firebase/util'
    ].forEach(dep => {
        if (!externalDependencies.includes(dep)) {
            externalDependencies.push(dep);
        }
    });
    project.architect.server.options.externalDependencies = externalDependencies;
    project.architect.deploy = {
        builder: '@angular/fire:deploy',
        options: {
            ssr: true
        }
    };
    tree.overwrite(workspacePath, JSON.stringify(workspace, null, 2));
    generateFirebaseJson(tree, 'firebase.json', options.project, staticOutput, serverOutput);
    ng_add_common_1.generateFirebaseRc(tree, '.firebaserc', options.firebaseProject, options.project);
    return tree;
};
