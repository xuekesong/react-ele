import React from 'react'
import './hot.min.css'

export default class Hot extends React.Component{
  constructor() {
    super();
    this.state = {
      listData: []
    }
  }

  componentWillMount() {//在render()方法之前执行
    if (this.props.hot_data) {
      this.setState({
        listData: [...this.props.hot_data]
      })
    }
  }

  render() {
    let currentListData = this.state.listData;
    let listData = currentListData.map((value, index) => {
      return <a className="hot-list__single" href="/" key={index}>{value.word}</a>
    })
    return (
      <div className="hot">
        <div className="hot-list">{listData}</div>
      </div>
    )
  }
}