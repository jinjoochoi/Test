import React, { Component, PropTypes } from 'react'
import NavSearch from './NavSearch'
import Signin from './Signin'
import QA from './QA'
import LangPopover from './LangPopover'


class Nav extends Component{
  constructor(props) {
    super(props)
    this.handleLangChange = this.handleLangChange.bind(this)
  }
  handleLangChange(lang){

  }

  renderLangPopover(){
    return (
          <LangPopover className="nav-lang">
            <div className="nav-lang-link">
              <span className="nav-text-mylanguage">KOR</span>
              <i className="icon chevron-down"></i>
              <i className="icon chevron-up"></i>
            </div>
            <div className="nav-lang-popover popover-content">
              <ul className="nav-lang-popover-list">
                <li className="nav-lang-popover-item">
                  KOR
                </li>
                <li className="nav-lang-popover-item">
                  ENG
                </li>
                <li className="nav-lang-popover-item">
                  CHN
                </li>
                <li className="nav-lang-popover-item">
                  JAP
                </li>
              </ul>
            </div>
          </LangPopover>
        )

  }

  renderNavUser() {

    //const { authed } = this.props;

    /*if (authed.user) {
      return (
        <Popover className="nav-user">
          <div className="nav-user-link">
            <img className="nav-authed-image" src={getImageUrl(authed.user.avatar_url)} />
            <i className="icon ion-chevron-down"></i>
            <i className="icon ion-chevron-up"></i>
          </div>
          <div className="nav-user-popover popover-content">
            <ul className="nav-user-popover-list">
              <li className="nav-user-popover-item">
                <a href="#" onClick={this.logout}>Log Out</a>
              </li>
            </ul>
          </div>
        </Popover>
      );
    }*/

    return (
      <Signin/>
    );
  }
  render(){
    return(
      <div className="nav">
        <div className="container clearfix">
          <div className="nav-logo">
            <img src="../img/nav_logo.png" className="logo"  onClick={this.props.onClick}/>
          </div>
          <div className="nav-nav float-left">
            <div className="nav-nav-item">
            <NavSearch />
            </div>
          </div>
          <div className="nav-nav float-right">
            <div className="nav-nav-item">
              <div className="nav-text-language">
                LANGUAGE
              </div>
            </div>
            <div className="nav-nav-item">
              {this.renderLangPopover()}

            </div>
            <div className="nav-nav-item">
              {this.renderNavUser()}
            </div>
            <div className="nav-nav-item">
              <QA/>
            </div>

        </div>
      </div>
      </div>



    )
  }
}


export default Nav;
