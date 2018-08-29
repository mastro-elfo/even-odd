import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

import Dashboard from "../Components/Dashboard";

export default class DashboardPage extends Component {
	render(){
		return (
			<div>
				<AppBar
					position="static"
					color="default">
					<Toolbar>
						<Typography
							variant="title"
							color="inherit"
							style={{flexGrow: 1}}>
							Dashboard
						</Typography>

						<IconButton
							title="About this app"
							onClick={()=>this.props.history.push('/info')}>
							<InfoIcon/>
						</IconButton>
					</Toolbar>
				</AppBar>

				<Dashboard/>
			</div>
		)
	}
}
