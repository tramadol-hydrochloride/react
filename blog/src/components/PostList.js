import React, { Component } from "react";
import { connect } from 'react-redux';

import { fetchPosts } from "../actions";

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPost();
    }

    render() {
        return (
            <div>Post List</div>
        );
    }
}

export default connect(null, {fetchPost: fetchPosts})(PostList);
