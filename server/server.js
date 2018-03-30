import express from 'express';
import fs from 'fs';
import path from 'path';

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import rootReducer from '../src/reducers';
import App from '../src/containers/App';
import page from './page';

import { matchRoutes } from "react-router-config"
import { routes } from "./routes"


// Initialize Express server
const app = express();

//Set port for Express server
const PORT = process.env.PORT || 5003;
app.set('port', PORT);

// Serve built files with static files middleware
app.use(express.static(path.join(__dirname, '../build'), {index: '_'}));

// Handle request
app.get("*", (req, res) => {
    
    const store = createStore(rootReducer);
    const { url } = req
    // For each route that matches
    const promises = matchRoutes(routes, url).map(({route, match}) => {
      // Load the data for that route. Include match information
      // so route parameters can be passed through.
      return store.dispatch(route.loadData(match))
    })

    // Wait for all the data to load
    Promise.all(promises).then(() => {

        const content = renderToString( 
            <Provider store={store}>
                <StaticRouter context={{}} location={url}>
                    <App />
                </StaticRouter>
            </Provider>
        )

        const helmet = Helmet.renderStatic();
        res.status(200).send(page(content, helmet, store.getState()));

    })
    
    // let initialData = {
    //     list: {
    //         count: 2
    //     }
    // }
    

    // const store = createStore(rootReducer, initialData);
    // const REACT_HTML = renderToString(
    //     <Provider store={store}>
    //         <StaticRouter context={{}} location={req.url} >
    //             <App />
    //         </StaticRouter>
    //     </Provider>
    // )
    
    // const helmet = Helmet.renderStatic();
    // return res.status(200).send(page(REACT_HTML, helmet, store.getState()));

});

    // Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
}); 

