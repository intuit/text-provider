import React from "react";
import PropTypes from "prop-types";
import {TextContext} from "./TextProvider";

export class FormattedMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        /* Do not frown over this, many a times you need to do this, like :
         * https://github.com/yahoo/react-intl/blob/master/src/components/html-message.js#L86
         */
        let messageString = this.context[this.props.id];
        for (const key in this.props.values) {
            messageString = messageString.replace("{" + key + "}", this.props.values[key]);
        }
        return (
<<<<<<< HEAD:src/FormattedMessage.js
            <span dangerouslySetInnerHTML={{ __html: messageString }}/>
=======
          <span dangerouslySetInnerHTML={{ __html: messageString }}/>
>>>>>>> upstream/master:src/FormattedMessage.js
        );
    }
}

FormattedMessage.contextType = TextContext;

FormattedMessage.propTypes = {
    id: PropTypes.string,
    values: PropTypes.object
};

FormattedMessage.defaultProps = {
<<<<<<< HEAD:src/FormattedMessage.js
    id: "",
    values: {}
=======
  id: "",
  values: {}
>>>>>>> upstream/master:src/FormattedMessage.js
};
