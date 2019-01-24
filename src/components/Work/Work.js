import React from 'react';
import './Work.css'

const key = process.env.REACT_APP_GitHubKey

export default class Work extends React.Component {


  render() {
    return (
      <React.Fragment>
        <section className="work">
          <h1>My Expertise</h1>
          <div className="work-text">
            <p>In my sort carreer as full stack JS developer I build some SPA (Single Page Applications) using HTML5,CSS3+, JS (ES6, ES7) with React or JQuery as front-end libraries and with Node.js and Express as back-end engine with MySQL or MongoDB for storing data.</p>
          </div>

        </section>
      </React.Fragment>
    );
  }
}
