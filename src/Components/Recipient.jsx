import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';

export default function Recipient (props) {
	const {sKey, clear, encrypted} = props;

	return (
		<Grid container
			direction="column">
			<Grid item xs={12}>
				<Typography
					variant="title"
					color="secondary">
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
						value={sKey}
						placeholder="Write the recipient's key"
						onChange={({target})=>props.onChangeKey(target.value)}
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
						value={encrypted}
						margin="normal"
						onChange={({target})=>props.onChangeEncrypted(target.value)}
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

			<Hidden smUp>
				<Grid item xs={12}>
					<Button
						onClick={props.onClick}>
						Sender
					</Button>
				</Grid>
			</Hidden>
		</Grid>
	)
}
