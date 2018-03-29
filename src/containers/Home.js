import React from 'react';

import {Helmet} from "react-helmet";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Homepage SEO</title>
                    <meta name="description" content="Description SEO" />
                </Helmet>
                <h1>Homepage</h1>
            </div>
        )
    }
}