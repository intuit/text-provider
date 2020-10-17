import React from "react";
import { TextProvider } from "text-provider";
import Banner from "./Banner";

import "./styles.css";

/**
 * The following object contains the localized
 * strings against each key. The key is used inside
 * the React code to display the string,
 */
const localizedStrings = {
  title: "Hello CodeSandbox",
  subTitle: "Start editing to see some magic happen!"
};

export default class App extends React.Component {
  /**
   * The TextProvider is the provider component to enable
   * the child heirarchy to read string defined inside the
   * globalText object.
   */
  render() {
    return (
      <TextProvider globalText={localizedStrings}>
        <Banner />
      </TextProvider>
    );
  }
}
