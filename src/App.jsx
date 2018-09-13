import React, { Component } from 'react';

// Customize main theme
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
// Provide theme down the tree of components
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import 'typeface-roboto';

import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import Info from "./Pages/Info";
import Dashboard from "./Pages/Dashboard";

// Customization
const theme = createMuiTheme({
	palette: {
		primary: blue
	}
});

export default class App extends Component {
	render(){
		return (
			<MuiThemeProvider theme={theme}>
				<BrowserRouter>
					<Switch>
						<Route path="/info" component={Info}/>
						<Route path="/" component={Dashboard}/>
						<Redirect to="/"/>
					</Switch>
				</BrowserRouter>
			</MuiThemeProvider>
		)
	}
}
