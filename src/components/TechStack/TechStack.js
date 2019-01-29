import React, { Component } from "react";
import './TechStack.css'

class TechStack extends Component {


  render() {
    return (
      <section className="tech-stack">
        <h1>My Tech Stack</h1>
        <div className="tech-stack-text">
          <p>In my sort carreer as full stack JS developer I build some SPA (Single Page Applications) using HTML5,CSS3+, JS (ES6, ES7) with React or JQuery as front-end libraries and with Node.js and Express as back-end engine with MySQL or MongoDB for storing data.</p>
        </div>

        <div className="skillsSection tech-stack-text">

          {this.props.tech.map((social, index) =>
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <i className={social.techIcon} ></i>
            </a>)}


        </div>
      </section>
    );
  }
}

export default TechStack;
