# file-uploader
React JS Progress / Loading bar

# Description

React loading component with progress bar, percentage and time estimated for the operation to be completed.

How it looks:
![alt text](loading.png "Loading bar example")

It has two options the compact mode, that shows the progress bar, percentage and time left in a single line, and the full mode which outputs in different lines how much items has processed, the current percentage, the progress bar and the estimated time to complete the current operation.

# Installation

Install it from npm and include it in your React build process (using Webpack, Browserify, etc).

```
npm i react-js-loading-progress-bar
```


# Usage

Import `LoadingProgress` in your react component.

```
import LoadingProgress from 'react-js-loading-progress-bar';
```

Props available:

| Name        | Type            | Mandatory | Description  
| ------------- |:-------------:| -----:|-----:|
| total      | integer | Y |The total items you are going to process |
| active      | boolean   | Y   |   If you want to activate the loading component |
| current | integer     | Y|   The current item being processed |
| showCompact | present?   |N  |   If you want the single line version (full by default) |


For example:
```javascript
 <LoadingProgress
  active={true}
  total={this.state.total}
  current={this.state.current}
  showCompact       
/>
```

# License 

Licensed under the MIT License.
