import React from 'react';
import PropTypes from 'prop-types';

export const TextContext = React.createContext({});

const TextProvider = (props) => {
  const { globalText, children } = props;
  return <TextContext.Provider value={globalText}>{children}</TextContext.Provider>;
};

TextProvider.propTypes = {
  globalText: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

TextProvider.defaultProps = {
  globalText: {},
};

export { TextProvider as default };
