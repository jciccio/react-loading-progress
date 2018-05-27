# file-uploader
React JS Progress / Loading bar

# Description

React loading component with progress bar, percentage and time estimated for the operation to be completed.

How it looks:



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

You'll need to pass as props:
* `total` - (int) The total items you are going to process.
* `current` - (int) The current item being processed
* `active` - (boolean) If you want to activate the loading component
* `showCompact` - If you want the single line version (full by default) 

For example:
```
 <LoadingProgress
  active={true}
  total={this.state.total}
  current={this.state.current}
  showCompact       
/>
```

# License 
MIT
