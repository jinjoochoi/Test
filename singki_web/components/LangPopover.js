import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


class LangPopover extends Component {
  constructor(props) {
    super(props);
    if (props.children.length !== 2) {
      throw new Error('Popover component requires exactly 2 children');
    }

    this.toggleIsOpen = this.toggleIsOpen.bind(this);

    this.state = { isOpen: false };
  }



  toggleIsOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { isOpen } = this.state;
    const { className, children } = this.props;

    return (
      <div
        className={`${className} popover ${(isOpen ? ' open' : '')}`}
        onClick={this.toggleIsOpen}
      >
        {children[0]}
        {isOpen ? children[1] : null}
      </div>
    );
  }
}

LangPopover.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default LangPopover;
