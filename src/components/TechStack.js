import React from 'react';

export default class TechStack extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="tech-stack">
          <h1>My Tech Stack</h1>
          <div className="tech-stack-text">
            <p>The main area of my expertise is full stack development and everything related with the web. HTML,CSS, JS (ES6, ES7), building small & medium SPA (Single Page Applications) with React.js or JQuery as front-end libraries and with Node.js and Express as back-end engine with MongoDB for storing data.</p>
          </div>

        </section>
      </React.Fragment>
    );
  }
}
