import React from 'react';
import Typing from 'react-typing-animation';
export default class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="home bg-transparent">
          <Typing className="title">
            <div className="center">
              <h1>{`I'm ${this.props.name}`}</h1> <br />
              <Typing.Delay ms={1000} />
              <h6>{this.props.job}</h6>
            </div>
          </Typing>
          <div className="hire-me">
            <a onClick={() => this.props.changeMenu('Contact')}>CONTACT ME LETS TALK</a>
          </div>
          <div className="social-icons">
            {this.props.socialMedia.map((social, index) => <a key={index} href={social.url} target="_blank"><i className={social.faIcon}></i> </a>)}
          </div>
        </section>
      </React.Fragment>
    );
  }
}
