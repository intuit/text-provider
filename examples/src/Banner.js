import React from "react";
import { FormattedMessage } from "text-provider";

export default class Banner extends React.Component {
  /**
   * The FormattedMessage component reads the string
   * against the id provided from the TextProvider component
   * defined in this components ancestory. The matching string
   * is then rendered.
   */
  render() {
    return (
      <div className="App">
        <h1>
          <FormattedMessage id="title" />
        </h1>
        <h2>
          <FormattedMessage id="subTitle" />
        </h2>
      </div>
    );
  }
}
