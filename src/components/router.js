import React, { Component } from 'react';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import TechStack from './TechStack';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import ansumanaCV from '../images/ansumanaCV.pdf';
import AnsuD from '../images/AnsuD.png';
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";



class router extends Component {



    state = {
        name: 'Ansumana Darboe',
        nickname: 'Ansumana',
        homeName: 'Ansumana',
        job: 'Frontend Web Developer | React.js | Node.js',
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
            { url: 'https://github.com/anamusna', faIcon: 'fab fa-github-square' },
            { url: 'https://www.linkedin.com/in/ansumana-darboe-a202a9146/', faIcon: 'fab fa-linkedin' },
            { url: ' https://www.facebook.com/royal.son.946', faIcon: 'fab fa-facebook' }
        ],


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
                        profileName={this.state.name}
                        profilePict={AnsuD}
                        bio={this.state.bio}
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
                        profileName={this.state.name}


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

    // this will execute before render()
    componentDidMount() {
        this.setState({ width: window.innerWidth });
    }

    changeMenu = selected => {
        this.setState({ menu: selected })
    }

    render() {
        return (
            <Router>
                <Fragment>
                    <Menu
                        nickname={this.state.name}
                        width={this.state.width}
                        menuBar={[...this.state.menuBar]}
                        changeMenu={this.changeMenu}
                    />
                    {this.whatToRender()}
                    <Footer />
                </Fragment>
            </Router>


        );
    }
}

export default router;
