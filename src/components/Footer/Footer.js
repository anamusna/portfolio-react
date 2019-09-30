import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
	render() {
		const date = new Date();
		const year = date.getFullYear();
		return (
			<footer>
				<div className="social-media">
					{this.props.socialMedia.map((social, index) => (
						<a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
							<i className={social.faIcon} />{' '}
						</a>
					))}
				</div>
				<p>
					<a href="http://ansumanadarboe.com/" rel="noopener noreferrer">
						Ansumana{' '}
					</a>{' '}
					&copy; {year}
				</p>
			</footer>
		);
	}
}
