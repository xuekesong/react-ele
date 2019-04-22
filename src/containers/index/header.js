import React from 'react'
import Header from '../../components/header/header.js'
import { weather, address } from '../../data/data.js'

export default class Headersmart extends React.Component{
  constructor() {
    super();
    this.state = {
      temperature: '',
			description: '',
			image_hash: '',
			address: ''
    }
  }

  componentWillMount() {//在render()方法之前执行
    this.setState({
      temperature: weather.temperature,
			description: weather.description,
			image_hash: weather.image_hash,
			address: address.address
    })
  }

  render() {
    return(
      <div>
        <Header data={this.state} />
      </div>
    )
  }
}