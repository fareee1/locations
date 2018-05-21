import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
            <header className="App-header">
            <img src={require('../assets/images/locationLogo.png')} className="App-logo" alt="logo" />
            <h1 className="App-title">Locations</h1><hr/>
          </header>
      </div>
    )
  }
}
