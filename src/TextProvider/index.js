import React from "react";
import PropTypes from "prop-types";

export class TextProvider extends React.Component {
    getChildContext() {
        return {
            globalText: this.props.globalText
        };
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

TextProvider.propTypes = {
    globalText: PropTypes.object
};

TextProvider.childContextTypes = {
    globalText: PropTypes.object
};
