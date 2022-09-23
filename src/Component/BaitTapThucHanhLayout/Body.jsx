import React, { Component } from 'react'
import Banner from './Body/Banner'
import Item from './Body/Item'

export default class Body extends Component {
  render() {
    return (
      <div>
        <Banner/>
        <div style={{minHeight:50}}></div>
        <Item/>
      </div>
    )
  }
}
