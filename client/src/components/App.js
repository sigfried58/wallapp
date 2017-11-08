import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../styles/main.css';

import Crypto from './Crypto';

class App extends Component {
	componentDidMount() {
		this.props.getCrypto();
	}
	render() {
		return (
			<div className="container">
				<MuiThemeProvider>
					<BrowserRouter>
						<div>
							<Route exact path="/" component={Crypto} />
						</div>
					</BrowserRouter>
				</MuiThemeProvider>
			</div>
		);
	}
}

export default connect(null, actions)(App);
