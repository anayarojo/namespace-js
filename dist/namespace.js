"use strict";

var namespace = function namespace() {
  var i = 0;
  var j = 0;
  var splitted = [];
  var scope = global;

  for (var _len = arguments.length, namespaces = new Array(_len), _key = 0; _key < _len; _key++) {
    namespaces[_key] = arguments[_key];
  }

  var args = namespaces.length === 1 && Array.isArray(namespaces[0]) ? namespaces[0] : namespaces;

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