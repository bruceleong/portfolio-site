import React, { Component } from 'react';
import './App.css';
import profile from './profile_pic.png';
import sCatCover from './images/scatCover.png';
import sCatGame from './images/ezgif.com-gif-maker.gif';
import DG from './images/dg.jpg';
import github from './images/GitHub_Logo.png';
import k1 from './images/kingdom-1.png';
import k2 from './images/kingdom-2.png';
import sbsf from './images/sbsf.png';
import wokLogo from './images/wokLogo.png';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 id="title">Bruce Leong</h1>
          <p id="kicker"> Creator // Runner // Software Engineer</p>
        </header>

        <div className="whitePage">
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div>
              <img id="profile_image" src={profile} />
            </div>
            <div>
              <h1>Bruce leong</h1>
              <p>Bruce is a Runner, Software Engineer, father of 2 cats</p>
              <p>He is a tech veteran with experience in building applications across many areas of focus</p>
              <p>Currently working on <a target="_blank" rel="noopener noreferrer" href="https://podcasts.apple.com/us/podcast/the-wok/id1566289500">The Wok Podcast</a></p>
              <p>He launched the <a target="_blank" rel="noopener noreferrer" href="https://www.dapperguide.com">Dapper Guide Magazine</a></p>
              <a className="btn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/bruce-leong-112a904/"> Bruce's Linkedin</a>
              <br />
              <br />
              <a className="btn__email-submission" href="mailto:brucewleong@gmail.com?Subject=Hi Bruce" target="_top">Contact Bruce</a>
              <p style={{ fontSize: '2rem' }}>See more details below</p>
            </div>
          </div>
        </div>

        <div className="greyPage">
          <h1>Bruce's Work</h1>
          <h2>His Code: </h2>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/bruceleong"><img style={{ width: '25%', height: 'auto' }} src={github} /></a>
          <h2>His Writing: </h2>
          <a target="_blank" rel="noopener noreferrer" href="https://podcasts.apple.com/us/podcast/the-wok/id1566289500"><h4>The Wok Podcast</h4></a>
          <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@brucewleong/building-a-game-with-phaserjs-easy-steps-7e4b38d36e22"><h4>Build a game with PhaserJS (Easy steps) - Publication: Medium '18</h4></a>
          <a target="_blank" rel="noopener noreferrer" href="https://dapperguide.com"><h4>Dapper Guide Magazine</h4></a>
          <br />
        </div>
        <div className="whitePage">
        <h1>His Projects: </h1>

          <a target="_blank" rel="noopener noreferrer" href="https://orendaretirement.com/" style={{ textDecoration: 'none' }}>
            <div className="textContent">
              <h1>Side By Side Financials' Employee Resource</h1>
              <p><b>Description:</b> Resource for SBSF client's to get info on their retirement account</p>
              <p><b>Role:</b> Software Engineer</p>
              <p><b>Technologies:</b> Cloud Firestore, Javascript, React, Trello, Netlify, CSS, HTML</p>
              <h4>CLICK HERE TO VISIT</h4>
              <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <img style={{ 'height': '50%', 'width': '50%' , 'border': '1px solid #D3D3D3'}} src={sbsf} />
              </div>
            </div>
          </a>
        </div>
        <div className="greyPage">
        <a target="_blank" rel="noopener noreferrer" href="https://podcasts.apple.com/us/podcast/the-wok/id1566289500" style={{ textDecoration: 'none' }}>
          <div>
            <div className="textContent">
              <h1>The Wok Podcast</h1>
              <p><b>Description:</b>The Wok is a platform to share and tell stories through the lens of food by Asian and Pacific Islander communities. The team presents narratives, and personal stories to add context to the foods we see and eat everyday. These stories explore identity, family history, and what it means to be part of the AAPI community.</p>
              <p><b>Role:</b> Creator</p>
              <p><b>Technologies:</b> Garage Band, iMovie, Audacity</p>
              <h4>CLICK HERE TO Listen</h4>
              <img style={{ 'height': '50%', 'width': '50%' , 'border': '1px solid #D3D3D3'}} src={wokLogo} />
            </div>
          </div>
        </a>
      </div>
        <div className="bluePage">
          <a target="_blank" rel="noopener noreferrer" href="http://www.dapperguide.com/" style={{ textDecoration: 'none' }}>
            <div className="textContent">
              <h1>Dapper Guide</h1>
              <p><b>Description:</b> Men's style guide created by Bruce Leong and Raymond Wong</p>
              <p><b>Role:</b> Software Engineer and Managing Editor</p>
              <p><b>Technologies:</b> Wordpress, CSS, HTML, PHP, wrote, shot and designed all media</p>
              <h4>CLICK HERE TO VISIT</h4>
              <img style={{ 'height': '75%', 'width': '75%', 'border': '1px solid #D3D3D3'}} src={DG} />
            </div>
          </a>
        </div>
        <div className="whitePage">
          <a target="_blank" rel="noopener noreferrer" href="http://www.kingdom.netlify.com/" style={{ textDecoration: 'none' }}>
            <div className="textContent">
              <h1>Kingdom</h1>
              <p><b>Description:</b> Location-based role playing game - Game of Thrones meets FourSquare</p>
              <p><b>Role:</b> Software Engineer</p>
              <p><b>Technologies:</b> Node.js, PostgreSQL, Sequelize, Redux, OAuth, Trello, Netlify, CSS, HTML</p>
              <h4>CLICK HERE TO VISIT</h4>
              <iframe width="336" height="200" src="https://www.youtube.com/embed/FovQ4xsrMyY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                <img style={{ 'height': '25%', 'width': '25%' }} src={k1} />
                <div style={{ width: "10vw" }}>
                </div>
                <img style={{ 'height': '25%', 'width': '25%' }} src={k2} />
              </div>
            </div>
          </a>
        </div>
        <div className="greyPage">
          <a target="_blank" rel="noopener noreferrer" href="https://bruceleong.github.io/SamuraiCat/" style={{ textDecoration: 'none' }}>
            <div>
              <div className="textContent">
                <h1>Samurai Cat Game</h1>
                <p><b>Description:</b> Samurai Cat is a platformer game created during a Fullstack Academy Hackathon, which took place over the course of 4 days where developers were invited to explore and create new products</p>
                <p><b>Role:</b> Software Engineer</p>
                <p><b>Technologies:</b> Phaser, Trello, designed all artwork</p>
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
