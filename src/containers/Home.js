import React from 'react';
import {Helmet} from "react-helmet";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment } from '../actions/list';

class Home extends React.Component {

    handleClick() {
        this.props.actions.increment();
    }

    render() {

        const { count } = this.props;

        return (
            <div>
                <Helmet>
                    <title>Homepage SEO</title>
                    <meta name="description" content="Description SEO" />
                </Helmet>
                <h1>Homepage</h1>
                Clicked { count } times
                <button onClick={this.handleClick.bind(this)}>Increment</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.list.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ increment }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)