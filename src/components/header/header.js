import React from 'react'
import './header.min.css'

class Header extends React.Component{
  render() {
    return (
      <header className="use-header">
        <div className="use-header__bg">
          <div className="use-header__bg--back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 32" version="1.1"><path fill="#fff" d="M16.552 5.633L14.508 3.59 2.243 15.853 14.508 28.41l2.044-2.043-10.22-10.513z"/></svg>
          </div>
          <h1 className="use-header__bg--title">{this.props.title}</h1>
        </div>
      </header>
    )
  }
}

export default Header