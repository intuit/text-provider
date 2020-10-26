import React from 'react';
import PropTypes from 'prop-types';
import { TextContext } from './TextProvider';

const FormattedMessage = (props) => (
  <TextContext.Consumer>
    {(context) => {
      /**
       * We get the text to be injected from react's context. Here its TextContext
       */
      const {
        id, values, alt, ariaLabel, automationId,
      } = props;
      /* eslint-disable-next-line react/destructuring-assignment */
      let messageString = Object.prototype.hasOwnProperty.call(context, id) ? context[id] : alt;
      /**
       * Iterate through all the keys given as the prop and replace with corresponding values.
       */
      Object.keys(values).forEach((key) => {
        messageString = messageString.replace(`{${key}}`, values[key]);
      });
      /* Do not frown over this, many a times you need to do this, like :
       * https://github.com/yahoo/react-intl/blob/master/src/components/html-message.js#L86
       */
      const style = {
        fontSize: 'inherit',
      };

      /* eslint-disable react/no-danger */
      return (
        <span
          automation-id={(automationId === '') ? id : automationId}
          aria-label={(ariaLabel === '') ? messageString : ariaLabel}
          style={style}
          dangerouslySetInnerHTML={{ __html: messageString }}
        />
      );
    }}
  </TextContext.Consumer>
);

FormattedMessage.propTypes = {
  id: PropTypes.string.isRequired,
  values: PropTypes.objectOf(PropTypes.object),
  alt: PropTypes.string,
  ariaLabel: PropTypes.string,
  automationId: PropTypes.string,
};

FormattedMessage.defaultProps = {
  values: {},
  alt: '',
  ariaLabel: '',
  automationId: '',
};

export { FormattedMessage as default };
