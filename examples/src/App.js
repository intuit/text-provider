import React from "react";
import { TextProvider, FormattedMessage } from "text-provider";
import Banner from "./Banner";

import "./styles.css";

/**
 * The following imports a JSON file containing the localized
 * strings against each key. The key is used inside
 * the React code to display the string,
 */
import localizedStrings from "./localized-strings-en.json";

const stringVariables = {
  name: "Niti Singhal"
};

/**
 * Default React component being loaded via index.js
 */
export default class App extends React.Component {
  /**
   * The TextProvider is the provider component to enable
   * the child heirarchy to read string defined inside the
   * globalText object.
   */
  render() {
    return (
      <React.Fragment>
        <TextProvider globalText={localizedStrings}>
          {/* The banner component uses the TextProvider component
        in ancestory to find all loaded strings. */}
          <Banner />
          <FormattedMessage id="note" values={stringVariables} />
        </TextProvider>
      </React.Fragment>
    );
  }
}
