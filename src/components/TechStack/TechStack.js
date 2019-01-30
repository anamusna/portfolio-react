import React, { Component } from "react";
import './TechStack.css'

class TechStack extends Component {


  render() {
    return (
      <section className="tech-stack">
        <h1>My Tech Stack</h1>
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
