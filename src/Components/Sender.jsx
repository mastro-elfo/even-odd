import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import KeyIcon from '@material-ui/icons/VpnKey';

export default function Sender (props) {
	const {sKey, clear, encrypted} = props;
	return (
		<Grid container>
			<Grid item xs={12}>
				<Typography
					variant="title"
					color="secondary">
					Sender
				</Typography>
			</Grid>

			<Grid item xs={12}>
				<FormControl fullWidth>
					<InputLabel htmlFor="sender-key">Key</InputLabel>
					<Input
						id="sender-key"
						type="text"
						value={sKey}
						placeholder="Choose a secret key"
						onChange={({target})=>props.onChangeKey(target.value)}
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									title="Generate a random key"
									onClick={()=>props.onChangeKey(Math.random().toString(36).substring(2, 10))}>
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
						value={clear}
						onChange={({target})=>props.onChangeClear(target.value)}
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

			<Hidden smUp>
				<Grid item xs={12}>
					<Button
						onClick={props.onClick}>
						Recipient
					</Button>
				</Grid>
			</Hidden>
		</Grid>
	)
}
