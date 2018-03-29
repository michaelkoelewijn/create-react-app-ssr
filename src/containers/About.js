import React from 'react';

import {Helmet} from "react-helmet";

export default class About extends React.Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>About SEO</title>
                    <meta name="description" content="About SEO" />
                </Helmet>

                <h1>About</h1>
            </div>
        )
    }
}