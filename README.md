<div style="text-align: center">
    <img
        width="200" height="200"
        src="./logo.png"
    />
    <h1>text-provider</h1>
    <p>
        A component which provides all the string constants using provider pattern
    </p>
</div>

<div style="text-align: center">
    <a href="https://circleci.com/gh/intuit/text-provider">
        <img
            src="https://img.shields.io/circleci/project/github/intuit/text-provider/master.svg?style=flat-square&logo=circleci"
            alt="CircleCI"
        />
    </a>
    <a href="https://www.npmjs.com/package/text-provider">
        <img
            src="https://img.shields.io/npm/v/text-provider.svg?style=flat-square&logo=npm"
            alt="npm"
        />
    </a>
    <a href="https://github.com/intuit/text-provider/graphs/contributors">
        <img
            src="https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square&logo=github"
            alt="All Contributors"
        />
    </a>
    <a href="https://www.npmjs.com/package/text-provider">
        <img
            src="https://img.shields.io/npm/dt/text-provider.svg?style=flat-square&logo=npm"
            alt="npm"
        />
    </a>
</div>

Text provider is a library to place all the string constants of an application in a single place and use them inside the components in a memory friendly way.

It provides **two components**:

1. [TextProvider](src/TextProvider.jsx)
2. [FormattedMessage](src/FormattedMessage.jsx)

## Install

```bash
npm i text-provider
```

## Usage

1. Import the string constants required for the particular presentational component:

```javascript
const sampleText = require("src/nls/sample-text.json");
```

2. Use the [TextProvider](src/TextProvider.jsx) to make it available for all the components:

```jsx
<TextProvider globalText={sampleText}>
  <MyPresentationalComponent/>
</TextProvider>
```

3. Now you can use [FormattedMessage](src/FormattedMessage.jsx) inside the presentational component:

```jsx
const MyPresentationalComponent = () => {
  <FormattedMessage id="Random Id"/>
};
```

A set of `values` can be pass to **FormattedMessage** as props, for example:

```jsx
const randomId = "Random Id";
const values = {
  "valueToBeInjected": "Random Value"
};

<FormattedMessage id={randomId} values={values}/>
```

Works like a format string also. Example JSON:

```json
{
  "Random Id": "<b>Random Text Returns</b> {valueToBeInjected} for each text)"
}
```

Then ``${valueToBeInjected}`` gets replaced with the value specified in `values`.

Make sure that a string by the same `id` exists in the JSON file.

## Contributing
This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!