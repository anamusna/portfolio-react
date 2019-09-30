import React from 'react';
import './Work.css';
import { RenderWork } from './RenderWork';

const key = process.env.REACT_APP_GitHubKey;

export default class Work extends React.Component {
	constructor(props) {
		super();
		this.state = {
			githubName : props.githubName,
			projectsID : props.projectsID,
			projects   : []
		};
	}

	fetchAsync = async () => {
		try {
			const userGitHub = await fetch(
				`https://api.github.com/users/${this.state
					.githubName}/repos?sort=updated?client_id=a12b6d5ca6b666061f3a&client_secret=${key}`
			);
			const userGitHubData = await userGitHub.json();
			const data = [ ...userGitHubData ];
			this.state.projectsID.map((id) => this.findProjects(data, id));
		} catch (error) {
			console.log('Error', error);
		}
	};

	findProjects = (data, id) => {
		//  console.log(data)
		data.map((repo) => {
			/* console.log(repo); */
			if (id === repo.id) {
				this.setState((prevState) => {
					return {
						projects : [
							...prevState.projects,
							{
								name        : repo.name,
								repoURL     : repo.html_url,
								description : repo.description,
								homepage    : repo.homepage,
								owner       : repo.owner.login,
								ownerURL    : repo.owner.html_url
							}
						]
					};
				});
			}
		});
	};

	componentDidMount() {
		this.fetchAsync();
		console.log(this.fetchAsync());
	}

	shouldComponentUpdate(prevState, nextState) {
		if (nextState.projects.length === nextState.projectsID.length) {
			return true;
		} else {
			return false;
		}
	}

	render() {
		return (
			<React.Fragment>
				<section className="work">
					<h1>Expertise</h1>
					<div className="work-text">
						<p>
							I built a number of applications with RESTful Api's using JavaScript(ES6), React or React
							Native, HTML5, CSS3 and jQuery as frontend libraries and on Node.js and Express.js as
							backend engines in combination with MongoDB or MySQL for data storage.
						</p>
					</div>
					{this.state.projects.map((project, index) => (
						<RenderWork
							key={index}
							index={index}
							name={project.name}
							link={project.repoURL}
							description={project.description}
							liveURL={project.homepage}
							owner={project.owner}
							ownerURL={project.ownerURL}
						/>
					))}
				</section>
			</React.Fragment>
		);
	}
}
