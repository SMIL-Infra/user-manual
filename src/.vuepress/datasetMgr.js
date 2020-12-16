const fs = require('fs');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (options, ctx) => {
    const datasetMeta = [];
    return {
        name: 'dataset-manager',
        extendPageData($page) {
            if (!$page.path.startsWith('/dataset/') || $page.path == '/dataset/') {
                return;
            }
            datasetMeta.push({
                ...$page.frontmatter,
                title: $page.title,
            });
            options.datasetPages.push($page.path);
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
        additionalPages() {
            let indexPageContent = '# 所有数据集\n\n'
            for (const ds of datasetMeta) {
                indexPageContent += `* [${ds.title}](${ds.path})\n`;
            }
            return [
                {
                    path: '/dataset/',
                    content: indexPageContent,
                },
            ];
        },
    }
}
