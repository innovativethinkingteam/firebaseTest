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
exports.ngAdd = exports.ngAddSetupProject = exports.setupProject = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const tasks_1 = require("@angular-devkit/schematics/tasks");
const core_1 = require("@angular-devkit/core");
const utils_1 = require("./utils");
const ng_add_ssr_1 = require("./ng-add-ssr");
const ng_add_static_1 = require("./ng-add-static");
function getWorkspace(host) {
    const possibleFiles = ['/angular.json', '/.angular.json'];
    const path = possibleFiles.filter(p => host.exists(p))[0];
    const configBuffer = host.read(path);
    if (configBuffer === null) {
        throw new schematics_1.SchematicsException(`Could not find angular.json`);
    }
    const content = configBuffer.toString();
    let workspace;
    try {
        workspace = core_1.parseJson(content, core_1.JsonParseMode.Loose);
    }
    catch (e) {
        throw new schematics_1.SchematicsException(`Could not parse angular.json: ` + e.message);
    }
    return {
        path,
        workspace
    };
}
const getProject = (options, host) => {
    const { workspace } = getWorkspace(host);
    const projectName = options.project || workspace.defaultProject;
    if (!projectName) {
        throw new schematics_1.SchematicsException('No Angular project selected and no default project in the workspace');
    }
    const project = workspace.projects[projectName];
    if (!project) {
        throw new schematics_1.SchematicsException('The specified Angular project is not defined in this workspace');
    }
    if (project.projectType !== 'application') {
        throw new schematics_1.SchematicsException(`Deploy requires an Angular project type of "application" in angular.json`);
    }
    return { project, projectName };
};
exports.setupProject = (host, options) => {
    const { path: workspacePath, workspace } = getWorkspace(host);
    const { project, projectName } = getProject(options, host);
    const config = {
        project: projectName,
        firebaseProject: options.firebaseProject
    };
    if (options.isUniversalProject) {
        return ng_add_ssr_1.setupUniversalDeployment({
            workspace,
            workspacePath,
            options: config,
            tree: host,
            project
        });
    }
    return ng_add_static_1.setupStaticDeployment({
        workspace,
        workspacePath,
        options: config,
        tree: host,
        project
    });
};
exports.ngAddSetupProject = (options) => (host) => __awaiter(void 0, void 0, void 0, function* () {
    const projects = yield utils_1.listProjects();
    const { firebaseProject } = yield utils_1.projectPrompt(projects);
    return exports.setupProject(host, Object.assign(Object.assign({}, options), { firebaseProject }));
});
exports.ngAdd = (options) => (host, context) => {
    const { project } = getProject(options, host);
    return utils_1.projectTypePrompt(project).then(({ universalProject }) => {
        if (universalProject) {
            ng_add_ssr_1.addFirebaseFunctionsDependencies(host, context);
        }
        else {
            ng_add_static_1.addFirebaseHostingDependencies(host, context);
        }
        const projectOptions = Object.assign(Object.assign({}, options), { isUniversalProject: universalProject });
        context.addTask(new tasks_1.RunSchematicTask('ng-add-setup-project', projectOptions), [
            context.addTask(new tasks_1.NodePackageInstallTask())
        ]);
    });
};
