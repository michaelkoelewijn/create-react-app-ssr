import React from "react";
import App from '../src/containers/App';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

var assets = require('../build/asset-manifest.json');

const HTML = (req) => {
    const helmet = Helmet.renderStatic();
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();
    let context = {};
    
    return (
        <html {...htmlAttrs}>
            <head>
                {helmet.title.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
            </head>
            <body {...bodyAttrs}>
                <div id="root">
                    <StaticRouter context={context} location={req.url} >
                        <App />
                    </StaticRouter>
                </div>

                <script type="text/javascript"  src={assets['main.js']}></script>

            </body>
        </html>
    )
}

export default HTML;