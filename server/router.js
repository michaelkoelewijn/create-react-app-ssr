import React from 'react';
import { renderToString } from 'react-dom/server'
import { matchPath, StaticRouter } from 'react-router-dom';
import { Helmet } from "react-helmet";

import Routes from './routes';
import RenderHTML from './render';
import App from '../src/containers/App';

export default function router(req, res, html) {
    
    const match = Routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
    if (!match) {
        res.status(404).send('page not found');
        return
    }

    return res.status(200).send(renderToString(RenderHTML(req)));
    
}