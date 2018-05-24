import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import searchbar from '../scss/searchbar.scss';//如果省略.scss，虽然在webpack构建本地测试环境时该文件找得到，但是在rollup构建生产环境时该文件找不到。

@CSSModules(searchbar, {allowMultiple: true})
class SearchBar extends React.Component {
  static propTypes = {
    postUrl: PropTypes.string,
    placeholderText: PropTypes.string
  }

  static defaultProps = {
    placeholderText: '输入年月日‘xxxx-xx-xx’可搜索该日存档'
  }

  constructor(props) {
    super(props);
    this.state = {
      stretch: false //存储是收缩还是伸展状态
    }
    this.clickSearchSwitch = this.clickSearchSwitch.bind(this);
  }

  clickSearchSwitch() {
    this.setState(prevState => ({
      stretch: !prevState.stretch
    }));
  }
  renderForm() {
    const { postUrl, placeholderText } = this.props;
    return (
      <form role="search" styleName="form" action={postUrl}>
        <button styleName="search-btn"></button> {/*button默认的type就为submit*/}
        <p styleName="input-area">
          <input type="search" placeholder={placeholderText} />
        </p>
      </form>
    );
  }
  renderSwitchBtn() {
    return (
      <button styleName="switch-btn" onClick={this.clickSearchSwitch}>
      </button>
    );
  }
  render() {
    const containerClass = classnames({
      "container": true,
      "initial-container": !this.state.stretch
    })
    return (
      <div styleName = {containerClass}>
        <div styleName = "content">
        { this.renderForm() }
        { this.renderSwitchBtn() }
        </div>
      </div>
    );
  }
}



export  default SearchBar;