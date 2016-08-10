import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

export default class SearchResultPage extends Component{
  constructor(props) {
    super(props)

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.text !== this.props.text) {
      loadData(nextProps)
    }
  }

  render(){
    return(
      <div>
        <h1>SearchResultPage</h1>
      </div>
    )

  }
}
