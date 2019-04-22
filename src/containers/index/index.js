import React from 'react'
import Headersmart from './header.js'
import Search from '../../components/index/search/search.js'
import Hotsmart from './hot.js'
import Bannersmart from './banner.js'

class Index extends React.Component{
  /* 保存登录状态 */
  render() {
    return (
      <div className="wrapper">
        <Headersmart />
        <Search />
        <Hotsmart />
        <Bannersmart />
      </div>
    )
  }
}

export default Index