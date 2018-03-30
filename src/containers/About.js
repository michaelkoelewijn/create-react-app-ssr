import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchInitialAboutData } from '../actions/list';
import {Helmet} from "react-helmet";

class About extends React.Component {

    componentDidMount() {
        this.props.actions.fetchInitialAboutData();
    }

    render() {
        const { items } = this.props;
        let renderedItems = items.map((item, index) => <li key={index}>{item}</li>);
        return (
            <div>
                <Helmet>
                    <title>About SEO</title>
                    <meta name="description" content="About SEO" />
                </Helmet>

                <h1>About</h1>
                <ul>{renderedItems}</ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.list.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ fetchInitialAboutData }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)