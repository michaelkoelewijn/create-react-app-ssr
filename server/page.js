
const assets = require('../build/asset-manifest.json');

export default (html, helmet, initialData) => `
    <!DOCTYPE html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
            <div id="root">${html}</div>
            <script>window.__INITIAL_STATE__ = ${JSON.stringify(initialData)}</script>
            <script type="text/javascript" src="${assets['main.js']}"></script>
        </body>
    </html>
`