import React from "react";
import {TextContext} from "./TextProvider";

export const withTextProvider = (SomeComponent) => { /* eslint-disable-line no-unused-vars */
    class TextProviderHOC extends React.Component {
        constructor(props) {
            super(props);
            this.getTextForKey = this.getTextForKey.bind(this);
        }

        getTextForKey(key) {
            const globalText = this.context;
            if (globalText.hasOwnProperty(key)) {
                return globalText[key];
            } else {
                return "";
            }
        }

        render() {
            return (
                <SomeComponent
                    getTextForKey={this.getTextForKey}
                />
            );
        }
    }
    TextProviderHOC.contextType = TextContext;
    return TextProviderHOC;
};
