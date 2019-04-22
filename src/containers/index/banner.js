import React from 'react'
import { bannerData } from '../../data/data.js'
import Banner from '../../components/index/banner/banner.js'

class Bannersmart extends React.Component{
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    this.setState({
      data: bannerData[0].entries
    })
  }

  render() {
    return (
      <Banner data={this.state.data}/>
    )
  }
}

export default Bannersmart