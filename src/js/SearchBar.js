import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSModules from 'react-css-modules';

import {getScrollTop, getOffsetTop} from './utils';

import searchbar from '../scss/searchbar.scss';//如果省略.scss，虽然在webpack构建本地测试环境时该文件找得到，但是在rollup构建生产环境时该文件找不到。

@CSSModules(searchbar, {allowMultiple: true})
class SearchBar extends React.Component {
  static propTypes = {
    postUrl: PropTypes.string.isRequired,
    placeholderText: PropTypes.string,
    sticky: PropTypes.bool
  }

  static defaultProps = {
    placeholderText: '',
    sticky: false
  }

  constructor(props) {
    super(props);
    this.state = {
      stretch: false, //存储是收缩还是伸展状态
      sticky:false
    }
    this.clickSearchSwitch = this.clickSearchSwitch.bind(this);
    this.stickyWhenScroll = this.stickyWhenScroll.bind(this);
  }

  componentDidMount() {
    const thisNode = ReactDOM.findDOMNode(this);
    this.offsetTop = getOffsetTop(thisNode);
    console.log('offsetTop:', this.offsetTop);
    const {sticky} = this.props;
    if (sticky) {
      window.addEventListener('scroll', this.stickyWhenScroll);
    }
  }
  stickyWhenScroll() {
    const scrollTopNow = getScrollTop();
    console.log(scrollTopNow > this.offsetTop);
    this.setState({
      sticky: scrollTopNow > this.offsetTop
    })
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
      "initial-container": !this.state.stretch,
      "sticky": this.state.sticky
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