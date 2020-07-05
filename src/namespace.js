"use strict";

const namespace = (...namespaces) => {

    let i = 0;
    let j = 0;

    let splitted = [];
    let scope = global;

    let args = namespaces.length === 1 && Array.isArray(namespaces[0]) ? 
    namespaces[0] : namespaces;

    if (!args.length) {
        return;
    }

    for (i = 0; i < args.length; i++) {
        splitted = args[i].split('.');
        scope = global;
        for (j = 0; j < splitted.length; j++) {
            if (!scope[splitted[j]]) {
                scope[splitted[j]] = {};
            }
            scope = scope[splitted[j]];
        }
    }

    return global;
};

module.exports = namespace;

