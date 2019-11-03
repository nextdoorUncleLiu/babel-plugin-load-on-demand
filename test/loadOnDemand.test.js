const babel = require('babel-core')
const loadOnDemand = require('../src/index.js')
it('loadOnDemand', () => {
    const { code } = babel.transform('import { Dialog } from "@mc/mc-components/packages"', {
        plugins: [
            [
                loadOnDemand,
                {
                    "libraryName": "@mc/mc-components/packages"
                }
            ]
        ]
    })
    expect(code).toMatchSnapshot()
})