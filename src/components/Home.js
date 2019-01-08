import React from 'react';
export default class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="home bg-transparent  App">
          <div className="container">
            <h1>{`I'm ${this.props.name},`}</h1>
            <h3>{this.props.job}</h3>
          </div>
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
