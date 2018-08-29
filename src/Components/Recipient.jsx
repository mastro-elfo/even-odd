import React, { Component } from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import CryptoJS from 'crypto-js';

export default class Recipient extends Component {
	constructor(props){
		super(props);
		this.state = {
			key: '',
			encrypted: ''
		}
	}

	render(){
		let clear = 'Error';
		try {
			clear = CryptoJS.AES.decrypt(this.state.encrypted, this.state.key).toString(CryptoJS.enc.Utf8);
		}
		catch(e){}

		return (
			<Grid container
				direction="column">
				<Grid item xs={12}>
					<Typography variant="title">
						Recipient
					</Typography>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<InputLabel htmlFor="recipient-key">Key</InputLabel>
						<Input
							id="recipient-key"
							type="text"
							label="Key"
							value={this.state.key}
							placeholder="Write the recipient's key"
							onChange={(e)=>this.setState({key:e.target.value})}
							/>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<TextField
							id="recipient-encrypted"
							label="Encrypted message"
							placeholder="Write the recipient's encrypted message here"
							multiline
							rows="4"
							value={this.state.encrypted}
							margin="normal"
							onChange={(e)=>this.setState({encrypted:e.target.value})}
						/>
					</FormControl>
				</Grid>

				<Grid item xs={12}>
					<FormControl fullWidth>
						<TextField
							id="recipient-message"
							label="Decrypted message"
							placeholder="Decrypted message will appear here"
							multiline
							readOnly
							rows="4"
							value={clear}
							margin="normal"
						/>
					</FormControl>
				</Grid>
			</Grid>
		)
	}
}
