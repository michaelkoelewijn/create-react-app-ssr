import React from "react";
import App from '../src/containers/App';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from '../src/store';

import { Helmet } from "react-helmet";

const assets = require('../build/asset-manifest.json');
const initialState = {
    __html: `window.__INITIAL_STATE__ = ${JSON.stringify(Store.getState())}`
}

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
                    <Provider store={Store}>
                        <div>
                            <StaticRouter context={context} location={req.url} >
                                <App />
                            </StaticRouter>
                        </div>
                    </Provider>
                </div>

                <script type="text/javascript" dangerouslySetInnerHTML={initialState}></script>
                <script type="text/javascript" src={assets['main.js']}></script>
                

            </body>
        </html>
    )
}

export default HTML;