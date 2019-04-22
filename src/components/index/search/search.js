import React from 'react'
import './search.min.css'

class Search extends React.Component{
  constructor() {
    super();
    this.state = {
      support: false,
      css: null,
      height: 0
    }
  }

  componentDidMount() {//在render()方法之后执行，家在服务器数据，如果使用了redux之类的数据服务，这里可家在服务器数据的action
    //支持 sticky顶部吸顶
    if (CSS.supports('position', 'sticky') || CSS.supports('position', '-webkit-sticky')) {
      this.setState({
        support: true
      })
    } else {
      let offsetY = this.searchDOM.offsetTop;
      //为了传递参数和配合解绑事件
      this._scrollTop = this._scrollTop.bind(this, offsetY);
      document.addEventListener('scroll', this._scrollTop);
    }
  }

  componentWillUnmount() {//在组件卸载unmounted或销毁destroyed之前，处理一些清理工作，比如无效的timers、interval
    document.removeEventListener('scroll', this._scrollTop);
  }

  _scrollTop(offsetY) {
    let css = null;
    let height = this.searchDOM.offsetHeight;
    if (window.scrollY > offsetY) {
      css = {
        position: 'fixed',
        top: 0,
        zIndex: 999
      }
    } else {
      css = {
        position: 'static'
      }
    }
    this.setState({
      css,
      height
    })
  }

  render() {
    return (
      <div className="search-box" style={
        this.state.support ? {position: 'sticky', top: '-1px', zIndex: 999}: {height: this.state.height === 0 ? null : this.state.height}
      }>
        <div className="search" ref={(div)=>{this.searchDOM = div;}} style={
          this.state.support ? null : this.state.css
        }>
          <div className="search-content">
            <i className="search-content__icon"></i>
            <span className="search-content__placeholder">搜索商家、商品名称</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Search