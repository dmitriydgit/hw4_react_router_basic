import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './components/AboutPage.jsx'

import { createBrowserHistory as createHistory } from 'history'
const history = createHistory();



class Navigation extends Component {
	render() {
		return (
			<BrowserRouter histrory={history}>
				<div>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='about'>About</Link>
						</li>
						<li>
							<Link to='contacts'>Contacts</Link>
						</li>
					</ul>
					<hr />

					<hr />
					<Route exact path="/" component={Home} >
						<Route path="/about" component={About} />
						<Route path="/contacts" component={Contacts} />
					</Route>
				</div>

			</BrowserRouter>
		)
	}
}

const Home = () => (
	<div>
		<h2>Home</h2>
	</div>
)
// const About = () => (
// 	<div>
// 		<h2>About</h2>
// 	</div>
// )
const Contacts = ({ match }) => {
	console.log('match', match)
	return (
		< div >
			<h2>Contacts</h2>
			<ul>
				<li>
					<Link to={`${match.url}/Contact1`}>Contact 1</Link>

				</li>
				<li>
					<Link to={`${match.url}/Contact2`}>Contact 2</Link>
				</li>
				{/* <li>
					<Link to='/contacts'>Back to contacts</Link>
				</li> */}
			</ul>
			<Route path={`${match.path}/:id`} component={Contact} />
			<Route exact path={match.path} render={() => <h3>Please select a contact.</h3>}
			/>
		</div >
	)
}

const Contact = ({ match }) => {

	console.log('match', match)

	return <div>
		<Link to='/contacts'>Back to contacts</Link>
		<h3> Requested Contact: {match.params.id}</h3 >
	</div>
}


export default Navigation;