import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Messages extends Component {
	render() {
		//console.log('match', match)
		return (
			< div >
				<h2>Messages</h2>
				<ul>
					<li>
						<Link to={`${this.props.match.url}/:1`}>Message1</Link>

					</li>
					<li>
						<Link to={`${this.props.match.url}/:2`}>Message 2</Link>
					</li>
				</ul>

				<Route path={`${this.props.match.path}/:id`} component={Child} />

			</div >
		)
	}
}


class Child extends Component {
	render() {

		return (
			<div>
				<Link to='/messages'>Back to messages</Link>
				<h3>URL ID parameter: {this.props.match.params.id}</h3>
			</div>
		)
	}
}

export default Messages;