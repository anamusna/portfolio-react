import React, { Component } from 'react';
import './TechStack.css';

class TechStack extends Component {
	render() {
		return (
			<section className="tech-stack">
				<h1>Tech-Stack</h1>
				<div className="tech-stack-text">
					<iframe
						title="Ansumana Tech Stack"
						frameborder="0"
						data-theme="light"
						data-layers="1,2,3,4"
						data-stack-embed="true"
						src="https://embed.stackshare.io/stacks/embed/de10647ba6ddd727aad7055fca4326"
					/>
				</div>
			</section>
		);
	}
}

export default TechStack;
