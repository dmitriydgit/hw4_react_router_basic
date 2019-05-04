import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class AboutPage extends Component {
	render() {
		return (
			<div>

				<ul role='nav'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/inboxPage'>Inbox page</Link>
					</li>
					<li>
						<Link to='/messages'>Messages</Link>
					</li>
				</ul>
				<hr></hr>
				<h2>About</h2>
				{this.props.children}
			</div>
		)
	}
}

export default AboutPage;