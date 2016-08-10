import React, { Component, PropTypes } from 'react'

class Picker extends Component{
  constructor(props) {
    super(props)
  }

  render(){
    const { value, onChange, options } = this.props

    return(
      <span>
      <select onChange={e => onChange(e.target.value)}
              value={value}
              style={style.picker}>
        {options.map(option =>
          <option value={option} key={option}>
            {option}
          </option>)
        }
      </select>
    </span>
    )
  }
}

Picker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}
var style = {
  picker:{
    marginLeft : 10
  }
}
export default Picker
