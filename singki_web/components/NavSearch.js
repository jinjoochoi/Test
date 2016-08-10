import React, { Component, PropTypes } from 'react'

class Explore extends Component{
  constructor(props) {
      super(props)
      this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleKeyUp(e) {
  if (e.keyCode === 13) {
    this.props.onChange(this.getInputValue())
    }
  }

  render(){
    return(
      <div className="nav-search">
      <i className="icon search" />
      <input className="nav-search-input"
             type="value"
             ref="input"
             onKeyUp={this.handleKeyUp}
             defaultValue={this.props.value}
             placeholder = "SONG TITLE, ARTISTS, LYRICS, YOUTUBE URL"
      />
      </div>
    )
  }
}

export default Explore
