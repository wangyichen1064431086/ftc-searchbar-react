# ftc-searchbar-react

[![](https://travis-ci.org/wangyichen1064431086/ftc-searchbar-react.svg?branch=master)](https://travis-ci.org/wangyichen1064431086/ftc-searchbar-react)

The searchbar for ftc-header-react.

## Install

```cmd
cd yourProject
npm install react react-dom prop-types
npm install "@ftchinese/ftc-searchbar-react" --save
```

## Usage

Example:

```js
import SearchBar from '@ftchinese/ftc-searchbar-react';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <SearchBar postUrl="\search" placeholderText = "输入年月日‘xxxx-xx-xx’可搜索该日存档" />,
  document.getElementById('root')
);
```

## props

### postUrl

Type String. **Required**. The url string for post your search.

### placeholderText

Type String. **Optional**. The placeholder word in search bar. Default is ''.

### sticky

Type Bool.**Optional**. This is **the new prop in this version**. With it you can decide the search bar to be sticky on the top of page when scrolling or not.