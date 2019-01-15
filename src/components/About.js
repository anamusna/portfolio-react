import React from 'react';
import Typing from 'react-typing-animation';
export default class About extends React.Component {


  render() {
    return (

      <section className="about">
        <div className="social-icons">

          <div className="pict-wrapper">
            <img className="profile-picture" src={this.props.profilePict} alt={this.props.profileName} />
          </div>
          {this.props.socialMedia.map((social, index) => <a key={index} href={social.url} target="_blank"><i className={social.faIcon}></i> </a>)}
        </div>
        <div className="aboutme-text">
          <Typing>
            <div>
              <h3>{this.props.profileName}</h3>
            </div>
          </Typing>
          <br />
          <p> A front-end web developer with an eye for design and a strong desire to learn and create ideas into reality.</p>
          <p>
            I firmly believe in life long learning and I'm constantly exploring new concepts and technologies. I tend to code things from scratch and enjoy bringing ideas to life in the browser.
        </p>
          <br />
          <h5> <a href={this.props.ansumanaCV} target="_blank">Click to view my CV</a></h5>
          <h3>Want to know more? <a href={`mailto:${this.props.email}`}>Email me</a>.</h3>
        </div>
      </section>


    );
  }
}