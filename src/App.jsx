import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import AboutPage from './components/AboutPage.jsx';
import InboxPage from './components/InboxPage.jsx';
import Messages from './components/Messages.jsx';

import { createBrowserHistory as createHistory } from 'history'
const history = createHistory();



class Navigation extends Component {
	render() {
		return (
			<BrowserRouter histrory={history}>
																																																																																																																																													
				<AboutPage>
					<Route path="/inboxPage" component={InboxPage} />
					<Route path="/messages" component={Messages} />
				</AboutPage>

			</BrowserRouter>
		)
	}
}






export default Navigation;