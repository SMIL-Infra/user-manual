const fs = require('fs');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (options, ctx) => {
    let datasetMeta;
    return {
        name: 'dataset-manager',
        ready() {
            datasetMeta = ctx.pages
                .filter(p => p.path.startsWith('/dataset/') && p.path != '/dataset/')
                .map(p => {
                    return {
                        ...p.frontmatter,
                        title: p.title,
                        pagePath: p.path,
                    }
                })
                .sort((a, b) => a.title.localeCompare(b.title));

            options.datasetPages.push(...datasetMeta.map(ds => ds.pagePath));
            ctx.pages.filter(p => p.path == '/dataset/')[0].allDatasets = datasetMeta;
        },
        chainWebpack(config, isServer) {
            if (isServer) {
                return;
            }
            ctx.writeTemp('all-dataset.json', JSON.stringify(datasetMeta));
            config.plugin('copy-dataset-meta')
                .use(CopyPlugin, [[
                    {
                        from: `${ctx.tempPath}/all-dataset.json`,
                        to: 'dataset/all.json',
                    },
                ]]);
        },
    }
}
