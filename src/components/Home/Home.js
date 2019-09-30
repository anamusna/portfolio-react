import React from 'react';
import Typing from 'react-typing-animation';
import './Home.css';
export default class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<section className="App home bg-transparent">
					<Typing className="title center">
						<h4 className="center">{`${this.props.name}`}</h4> <br />
						<Typing.Delay ms={1000} />
						<h6>{this.props.job}</h6>
					</Typing>
					<div className="hire-me App">
						<button onClick={() => this.props.changeMenu('Contact')}>CONTACT ME</button>
					</div>
					{/* 	<div className="social-icons">
						{this.props.socialMedia.map((social, index) => (
							<a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
								<i className={social.faIcon} />{' '}
							</a>
						))}
					</div> */}
				</section>
			</React.Fragment>
		);
	}
}
