import React from "react";
import {connect} from 'react-redux';

import {createStream} from '../../actions'
import StreamForm from "./streamForm";

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const validate = formValues => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'Please enter a title';
    }
    if (!formValues.description) {
        errors.description = 'Please enter a description'
    }

    return errors;
};

export default connect(null, {createStream})(StreamCreate);
