import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import KeyIcon from '@material-ui/icons/VpnKey';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CryptoJS from 'crypto-js';

export default class Sender extends Component {
	constructor(props){
		super(props);
		this.state = {
			key: '',
			clear: ''
		}
	}

	render(){
		let encrypted = '';
		if(this.key !== this.state.key || this.clear !== this.state.clear) {
			try {
				encrypted = CryptoJS.AES.encrypt(this.state.clear, this.state.key).toString();
			}
			catch(e){}

			this.key = this.state.key;
			this.clear = this.state.clear;
		}
		return (
			<Grid container>
				<Grid item xs={12}>
					<Typography variant="title">
						Sender
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel htmlFor="sender-key">Key</InputLabel>
						<Input
							id="sender-key"
							type="text"
							value={this.state.key}
							placeholder="Choose a secret key"
							onChange={(e)=>this.setState({key: e.target.value})}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										title="Generate a random key"
										onClick={()=>this.setState({key: Math.random().toString(36).substring(2, 8)})}>
										<KeyIcon/>
									</IconButton>
								</InputAdornment>
							}
							/>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<TextField
							id="sender-message"
							label="Your message"
							placeholder="Write a message to encrypt"
							multiline
							rows="4"
							value={this.state.clear}
							onChange={(e)=>this.setState({clear: e.target.value})}
							margin="normal"
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<TextField
							id="sender-encrypted"
							label="Encrypted message"
							placeholder="Your encrypted message will appear here"
							multiline
							readOnly
							rows="4"
							value={encrypted}
							margin="normal"
						/>
					</FormControl>
				</Grid>
			</Grid>
		)
	}
}
