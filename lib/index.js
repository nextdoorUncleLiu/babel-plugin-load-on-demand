"use strict";

function LoadOnDemand(_ref) {
  var types = _ref.types;
  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path, ref) {
        var _path$node = path.node,
            specifiers = _path$node.specifiers,
            source = _path$node.source;
        var opts = ref.opts;

        if (opts.libraryName == source.value && !types.isImportDefaultSpecifier(specifiers[0])) {
          var newImport = specifiers.map(function (specifier) {
            return types.importDeclaration([types.ImportDefaultSpecifier(specifier.local)], types.stringLiteral("".concat(source.value, "/").concat(specifier.local.name)));
          });
          path.replaceWithMultiple(newImport);
        }
      }
    }
  };
}

module.exports = LoadOnDemand;