import React from 'react';
import {Helmet} from "react-helmet";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { increment, fetchInitialData } from '../actions/list';

class Home extends React.Component {

    componentDidMount() {
        this.props.actions.fetchInitialData();
    }

    handleClick() {
        this.props.actions.increment();
    }

    render() {

        const { count, items } = this.props;

        let renderedItems = items.map((item, index) => <li key={index}>{item}</li>);

        return (
            <div>
                <Helmet>
                    <title>Homepage SEO</title>
                    <meta name="description" content="Description SEO" />
                </Helmet>
                <h1>Homepage</h1>
                Clicked { count } times
                <button onClick={this.handleClick.bind(this)}>Increment</button>

                <ul>{renderedItems}</ul>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.list.count,
        items: state.list.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ increment, fetchInitialData }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)