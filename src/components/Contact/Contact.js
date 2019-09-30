import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import './Contact.css';

export default class Contact extends React.Component {
	render() {
		const style = {
			height : '200px'
		};

		return (
			<React.Fragment>
				<section className="contact">
					<div className="contact-text">
						<h2>I live in Berlin and am free to be hired.</h2>
						<a href={`mailto:${this.props.email}`}>Email me</a>
						<p>Any enquiries, please contact me either by email or with the form below...</p>
						<br />
						<Form action={`mailto:${this.props.email}`} method="GET">
							<FormGroup>
								<Label>Subject</Label>
								<Input type="text" name="subject" id="form-subject" placeholder="Subject" />
							</FormGroup>
							<FormGroup>
								<Label>Message</Label>
								<Input
									style={style}
									type="textarea"
									name="body"
									id="form-text"
									placeholder="Write me something..."
								/>
							</FormGroup>
							<Button type="submit" value="Send">
								Submit
							</Button>
						</Form>
					</div>
					<GoogleMaps />
					{/* 	<div className="social">
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
