import React, { Component } from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import TechStack from './components/TechStack';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ansumanaCV from './images/ansumanaCV.pdf';
import AnsuD from './images/AnsuD.png';
import './App.css';

const key = process.env.REACT_APP_GitHubKey

class App extends Component {



  state = {
    name: 'Ansumana Darboe',
    nickname: 'Ansumana',
    homeName: 'Ansumana',
    job: 'Frontend Web Developer | React.js | Node.js',
    email: 'ansumana.d@yahoo.com',
    menuBar: [
      { endPoint: 'Home', faIcon: 'fas fa-home' },
      { endPoint: 'About', faIcon: 'fas fa-user' },
      { endPoint: 'Tech', faIcon: 'fas fa-cogs' },
      { endPoint: 'Projects', faIcon: 'fas fa-eye' },
      { endPoint: 'Contact', faIcon: 'fas fa-envelope-open' },
    ],
    socialMedia: [
      { url: 'https://github.com/anamusna', faIcon: 'fab fa-github-square' },
      { url: 'https://www.linkedin.com/in/ansumana-darboe-a202a9146/', faIcon: 'fab fa-linkedin' },
      { url: ' https://www.facebook.com/royal.son.946', faIcon: 'fab fa-facebook' }
    ],


    enterpriseGitHub: 'devugees',
    githubData: {
      profileName: 'anamusna',
      githubPict: null,
      bio: null,
    },
    projectsID: [155543450, 163668160, 158218706, 161310391, 150238636],
    menu: 'Home',
    width: null,
  }



  whatToRender = () => {
    let whatToRender
    switch (this.state.menu) {
      case ('About'):
        whatToRender = (
          <About
            githubName={this.state.githubData.githubName}
            profilePict={AnsuD}
            bio={this.state.githubData.bio}
            socialMedia={[...this.state.socialMedia]}
            email={this.state.email}
            ansumanaCV={ansumanaCV}

          />)
        break;
      case ('Tech'):
        whatToRender = (<TechStack />)
        break;
      case ('Projects'):
        whatToRender = (
          <Work
            githubName={this.state.githubData.githubName}


          />)
        break;
      case ('Contact'):
        whatToRender = (<Contact email={this.state.email} />)
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
  fetchAsync = async () => {
    try {
      const result = await fetch(`https://api.github.com/users/${this.state.githubData.githubName}?client_id= 36986708&client_secret=${key}`);
      const data = await result.json();
      this.setState(
        {
          githubData: {
            githubPict: data.avatar_url,
            bio: data.bio,
            githubName: data.login,
          }
        }
      )
    } catch (error) {
      console.log('Error', error);
    }
  }


  // this will execute before render()
  componentDidMount() {
    this.fetchAsync();
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
