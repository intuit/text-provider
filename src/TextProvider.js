import React from "react";
import PropTypes from "prop-types";

export const TextContext = React.createContext({});

export class TextProvider extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TextContext.Provider value={this.props.globalText}>
                {this.props.children}
            </TextContext.Provider>
        );
    }
}

TextProvider.propTypes = {
    globalText: PropTypes.object,
    children: PropTypes.node.isRequired
};

TextProvider.defaultProps = {
    globalText: {}
};
