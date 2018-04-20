import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import profile from './profile_pic.png'

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
      <h1 id="title">Bruce Leong</h1>
      <p id="kicker"> Creator // Runner // Web Developer</p>
    </header>

    <nav>
      <a href="">About Me</a>
      <a href="https://biscotini917.github.io/GuessingGame-Part3/ ">Work</a>
      <a href="">Clients</a>
      <a href="mailto:brucewleong@gmail.com?Subject=Inquiry" target="_top">Send Mail</a>
    </nav>
    <article id="about_me">
    <img id="profile_image" src={profile} />
    <h1>Who is Bruce?</h1>
    <p>Runner, Web Developer, lives in Astoria, father of 2 cats</p>
  </article>
      </div>
    );
  }
}

export default App;
