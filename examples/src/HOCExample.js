import React from "react";
import { withTextProvider } from "text-provider";

class HOCExample extends React.Component {
  render() {
    return this.props.getTextForKey("hocExample");
  }
}

export default withTextProvider(HOCExample);
