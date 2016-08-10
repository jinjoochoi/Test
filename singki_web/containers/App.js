import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Nav from '../components/Nav'

export default class App extends Component{
  constructor(props) {
    super(props)
    this.handlegoHomePage = this.handlegoHomePage.bind(this)

  }
  handlegoHomePage(){
    browserHistory.push(`/`)
  }

  render(){
    const { children } = this.props
    return(
    <div>
      <Nav onClick={this.handlegoHomePage}/>
      {children}
    </div>
    )
  }
}
App.propTypes = {
  children: PropTypes.node
}
