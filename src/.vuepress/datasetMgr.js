const fs = require('fs');
const { promisify } = require('util')

module.exports = (options) => {
    let allDsJson;
    return {
        name: 'dataset-manager',
        async onInitialized(app) {
            const datasetMeta = app.pages
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
            allDsJson = JSON.stringify(datasetMeta);
            await app.writeTemp('allDatasets.json', allDsJson);
        },
        async onGenerated(app) {
            await promisify(fs.writeFile)(app.dir.dest('dataset/all.json'), allDsJson)
        }
    }
}
