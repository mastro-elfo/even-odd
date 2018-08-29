import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

export default class Info extends Component {
	render(){
		return (
			<div style={{
					padding: "1em"
				}}>
				<Typography variant="title">
					General Info
				</Typography>

				<Typography variant="title">
					Cookie
				</Typography>
				<Typography paragraph>
					This app is cookie free since 2018.
				</Typography>
			</div>
		)
	}
}
