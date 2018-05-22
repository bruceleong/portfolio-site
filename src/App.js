import React, { Component } from 'react';
import './App.css';
import profile from './profile_pic.png'
import sCatCover from './images/scatCover.png'
import sCatGame from './images/ezgif.com-gif-maker.gif'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1 id="title">Bruce Leong</h1>
          <p id="kicker"> Creator // Runner // Software Engineer</p>
        </header>

        <nav>
          <div>
            <a href="mailto:brucewleong@gmail.com?Subject=Yo Buddy" target="_top">Contact Bruce</a>
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=10UlFQ0tGuf4nDC1Zjf1ESHWtmpzW-teP">Checkout Bruce's Resume</a>
          </div>
        </nav>
        <div className="whitePage">
          <img id="profile_image" src={profile} />
          <div className="textContent">
            <h1>Who is Bruce?</h1>
            <p>Bruce Leong is a Runner, Software Engineer, father of 2 cats</p>
            <p>He is a tech veteran with experience at top tier companies like Pandora and WebMD</p>
            <p>He launched the <a target="_blank" rel="noopener noreferrer" href="https://www.dapperguide.com">Dapper Guide Magazine</a></p>
            <p>See more details below</p>
          </div>
        </div>
        <div className="greyPage">
          <h1>Bruce's Work</h1>
          <h2>Articles: </h2>
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@brucewleong/building-a-game-with-phaserjs-easy-steps-7e4b38d36e22"><h4>Build a game with PhaserJS (Easy steps) - Publication: Medium 2018</h4></a>
          <a target="_blank" rel="noopener noreferrer" href="https://dapperguide.com"><h4>Dapper Guide Magazine</h4></a>
          <a target="_blank" rel="noopener noreferrer" href="https://bruceleong.github.io/SamuraiCat/" style={{ textDecoration: 'none' }}>
            <div>
              <div className="textContent">
                <h2>Samurai Cat Game</h2>
                <p>Description: Samurai Cat is a platformer game created during a Fullstack Academy Hackathon, which took place over the course of 4 days where developers were invited to explore and create new products</p>
                <p>Technologies: Javascript, Phaser, Trello, designed all artwork</p>
                <h4>CLICK HERE TO PLAY!</h4>
              </div>
              <iframe width="336" height="200" src="https://www.youtube.com/embed/wYe5ICYOUNU" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            </div>
            <img className="sCat" src={sCatCover} />
            <img className="sCat" src={sCatGame} />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
