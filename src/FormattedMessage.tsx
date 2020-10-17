import React from 'react';
import { TextContext } from './TextProvider';

interface Props {
  id: string;
  values?: { [key: string]: string };
  alt?: string;
}

const FormattedMessage: React.FC<Props> = ({ id, values = {}, alt = '' }: Props) => (
  <TextContext.Consumer>
    {(context: { [key: string]: string }) => {
      /**
       * We get the text to be injected from react's context. Here its TextContext
       */
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
      return <span style={style} dangerouslySetInnerHTML={{ __html: messageString }} />;
    }}
  </TextContext.Consumer>
);

export { FormattedMessage as default };
