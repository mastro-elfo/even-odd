import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import BackIcon from '@material-ui/icons/ArrowBack';

import Info from "../Components/Info";

export default class InfoPage extends Component {
	render(){
		return (
			<div>
				<AppBar
					position="static"
					color="default">
					<Toolbar>
						<IconButton
							title="Back to main view"
							onClick={()=>this.props.history.goBack()}>
							<BackIcon/>
						</IconButton>
						<Typography
							variant="title"
							color="inherit">
							Info
						</Typography>
					</Toolbar>
				</AppBar>

				<Info/>
			</div>
		)
	}
}
