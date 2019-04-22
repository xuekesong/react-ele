import React from 'react'
import { hot_data } from '../../data/data.js'
import Hot from '../../components/index/hot/hot.js'
import { shuffle } from '../../data/shuffle.js'

export default class Hotsmart extends React.Component{
  constructor() {
    super();
    this.state = {
      hot_data: []
    }
  }

  /* 父组件的componentDidMount 并不能触发子组件的渲染，所以父组件给子组件传数据要 componentWillMount 传过来 */
  componentWillMount() {
    if (hot_data) {
      this.setState({
        hot_data: shuffle(hot_data)
      })
    }
  }

  render() {
    return (
      <div>
        <Hot hot_data={this.state.hot_data}/>
      </div>
    )
  }
}