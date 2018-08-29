import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';

import Info from "./Pages/Info";
import Dashboard from "./Pages/Dashboard";

export default class App extends Component {
	render(){
		return (
			<div className="App">
				<BrowserRouter>
					<Switch>
						<Route path="/info" component={Info}/>
						<Route path="/" component={Dashboard}/>
						<Redirect to="/"/>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}
