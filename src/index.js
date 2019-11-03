function LoadOnDemand({ types }) {
    return {
        visitor: {
            ImportDeclaration(path, ref) {
                const { specifiers, source } = path.node;
                const { opts } = ref
                if (opts.libraryName == source.value && (!types.isImportDefaultSpecifier(specifiers[0]))) {
                    let newImport = specifiers.map(specifier => {
                        return types.importDeclaration([types.ImportDefaultSpecifier(specifier.local)], types.stringLiteral(`${source.value}/${specifier.local.name}`))
                    })
                    path.replaceWithMultiple(newImport)
                }
            }
        }
    }
}
module.exports = LoadOnDemand