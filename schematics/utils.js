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
exports.getFirebaseProjectName = exports.projectTypePrompt = exports.projectPrompt = exports.listProjects = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const ng_add_ssr_1 = require("./ng-add-ssr");
function listProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        const firebase = require('firebase-tools');
        yield firebase.login();
        return firebase.projects.list();
    });
}
exports.listProjects = listProjects;
const isProject = (elem) => {
    return elem.original === undefined;
};
const searchProjects = (projects) => {
    return (_, input) => {
        return Promise.resolve(require('fuzzy')
            .filter(input, projects, {
            extract(el) {
                return `${el.projectId} ${el.displayName}`;
            }
        })
            .map((result) => {
            let original;
            if (isProject(result)) {
                original = result;
            }
            else {
                original = result.original;
            }
            return {
                name: `${original.displayName} (${original.projectId})`,
                title: original.displayName,
                value: original.projectId
            };
        }));
    };
};
exports.projectPrompt = (projects) => {
    const inquirer = require('inquirer');
    inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
    return inquirer.prompt({
        type: 'autocomplete',
        name: 'firebaseProject',
        source: searchProjects(projects),
        message: 'Please select a project:'
    });
};
exports.projectTypePrompt = (project) => {
    if (ng_add_ssr_1.isUniversalApp(project)) {
        return require('inquirer').prompt({
            type: 'confirm',
            name: 'universalProject',
            message: 'We detected an Angular Universal project. Do you want to deploy as a Firebase Function?'
        });
    }
    return Promise.resolve({ universalProject: false });
};
function getFirebaseProjectName(workspaceRoot, target) {
    const rc = JSON.parse(fs_1.readFileSync(path_1.join(workspaceRoot, '.firebaserc'), 'UTF-8'));
    const targets = rc.targets || {};
    const projects = Object.keys(targets || {});
    return projects.find(project => !!Object.keys(targets[project].hosting).find(t => t === target));
}
exports.getFirebaseProjectName = getFirebaseProjectName;
