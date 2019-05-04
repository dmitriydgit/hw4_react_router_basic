import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { createBrowserHistory as createHistory } from 'history'
const history = createHistory();


class InboxPage extends Component {
	render() {
		//console.log('match', match)
		return (
			< div >
				<h2>Contacts</h2>
				<ul>
					<li>
						<Link to={`${this.props.match.url}/:1`}>Contact 1</Link>

					</li>
					<li>
						<Link to={`${this.props.match.url}/:2`}>Contact 2</Link>
					</li>
				</ul>
				<Route path={`${this.props.match.path}/:id`} component={Contact} />

			</div >
		)
	}
}




class Contact extends Component {
	render() {
		console.log('match', this.props.match)
		return (
			<div>
				<Link to='/contacts'>Back to contacts</Link>
				<h3> Requested Contact: {this.props.match.params.id}</h3 >
			</div>
		)
	}

}

export default InboxPage;