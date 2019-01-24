import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import Home from './components/Home/Home';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ansumanaCV from './images/ansumanaCV.pdf';
import AnsuD from './images/AnsuD.png';
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';


class App extends Component {



  state = {
    name: 'Ansumana Darboe',
    nickname: 'Ansumana',
    homeName: 'Ansumana',
    job: 'Web Developer | React.js | Node.js',
    email: 'ansumana.d@yahoo.com',
    bio: 'Berlin',
    menuBar: [
      { endPoint: 'Home', faIcon: 'fas fa-home' },
      { endPoint: 'About', faIcon: 'fas fa-user' },
      { endPoint: 'Tech', faIcon: 'fas fa-cogs' },
      { endPoint: 'Projects', faIcon: 'fas fa-eye' },
      { endPoint: 'Contact', faIcon: 'fas fa-envelope-open' },
    ],

    socialMedia: [
      { url: 'https://github.com/anamusna', faIcon: 'fab fa-github' },
      { url: 'https://www.linkedin.com/in/ansumana-darboe-a202a9146/', faIcon: 'fab fa-linkedin-in' },
      { url: ' https://www.facebook.com/royal.son.946', faIcon: 'fab fa-facebook-f' },
      { url: '#', faIcon: 'fab fa-instagram' },
      { url: '#', faIcon: 'fab fa-twitter' },
    ],
    tech: [
      { url: '#', techIcon: 'fab fa-node-js ' },
      { url: '#', techIcon: 'fab fa-html5 ' },
      { url: '#', techIcon: 'fab fa-react ' },
      { url: '#', techIcon: 'fab fa-github' },
      { url: '#', techIcon: 'fab fa-linkedin-in' },
      { url: '#', techIcon: 'fab fa-instagram' },
      { url: '#', techIcon: 'fab fa-js' },
      { url: '#', techIcon: 'fab fa-css3' },
      { url: '#', techIcon: 'fab fa-sass' },
    ],

    projectsID: [
      155543450,
      163668160,
      158218706,
      161310391,
      150238636
    ],
    menu: 'Home',
    width: null,
  }


  whatToRender = () => {
    let whatToRender
    switch (this.state.menu) {
      case ('About'):
        whatToRender = (

          <About
            profileName={this.state.name}
            profilePict={AnsuD}
            bio={this.state.bio}
            socialMedia={[...this.state.socialMedia]}
            email={this.state.email}
            ansumanaCV={ansumanaCV}

          />)
        break;
      case ('Tech'):
        whatToRender = (<TechStack
          tech={this.state.tech}
        />)
        break;
      case ('Projects'):
        whatToRender = (
          <Work


          />)
        break;
      case ('Contact'):
        whatToRender = (<Contact email={this.state.email}
          socialMedia={[...this.state.socialMedia]}
        />)
        break;
      default:
        whatToRender = (
          <Home

            job={this.state.job}
            name={this.state.nickname}
            changeMenu={this.changeMenu}
            socialMedia={[...this.state.socialMedia]}
          />)
    }
    return whatToRender
  }

  // this will execute before render()
  componentDidMount() {
    this.setState({ width: window.innerWidth });
  }

  changeMenu = selected => {
    this.setState({ menu: selected })
  }

  render() {
    return (
      <React.Fragment>

        <div className="App">
          <Menu
            nickname={this.state.name}
            width={this.state.width}
            menuBar={[...this.state.menuBar]}
            changeMenu={this.changeMenu}
          />
          {this.whatToRender()}
          <Footer />

        </div>

      </React.Fragment>
    );
  }
}

export default App;
