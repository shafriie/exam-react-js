import React, { Component } from 'react';
import './App.css';

class App extends Component {

  klikTest = () => {
    alert('Hello World !')
  }

  render() {

    const navHeader = {
      padding: '10px',
      background: 'orange',
      textAlign: 'center'
    }

    const menu = {
      marginRight: '40px',
      fontSize: '18px',
    }

    const menuActive = {
      marginRight: '40px',
      fontWeight: 'bold',
      fontSize: '18px'
    }

    const mainContent = {
      margin: 'auto',
      width: '75%'
    }

    const btn = {
      padding: '10px',
      fontWeight: 'bold',
      background: 'red',
      color: 'white',
      borderRadius: '20%'
    }

    const content = <h2 style={{color: 'blue'}}>Hello Gengs , How are you? Please click this <button style={btn} onClick={this.klikTest}>Me</button></h2>

    return (
      <div>
        <nav style={navHeader}>
          <a style={menuActive}>Dashboard</a>
          <a style={menu}>Profile</a>
          <a style={menu}>About</a>
          <a style={menu}>News</a>
          <a style={menu}>Social Media</a>
          <a style={menu}>Logout</a>
        </nav>

        <div style={mainContent}>
        {content}
        </div>
      </div>
    );
  }

}

export default App;
