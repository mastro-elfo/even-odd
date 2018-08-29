import React, { Component } from 'react';

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
			<div>
				<h1 style={{
						paddingLeft: '1rem'
					}}>Recipient</h1>
				<div style={{
						padding: '1em'
					}}>
					<input
						onChange={(e)=>this.setState({key:e.target.value})}
						placeholder="Write the recipient's key"
						value={this.state.key}
						style={{
							color: 'inherit',
							font: 'inherit',
							letterSpacing: 'inherit',
							border: '1px solid lightgrey',
							borderRadius: '0.2em',
							padding: '0.5em'
						}}/>
				</div>
				<div style={{
						padding: '1em'
					}}>
					<textarea
						onChange={(e)=>this.setState({encrypted:e.target.value})}
						value={this.state.encrypted}
						placeholder="Write the recipient's encrypted message here"
						style={{
							resize: 'none',
							font: 'inherit',
							color: 'inherit',
							letterSpacing: 'inherit',
							border: '1px solid lightgrey',
							borderRadius: '0.2em',
							padding: '0.5em'
						}}></textarea>
				</div>
				<div style={{
						padding: '1em'
					}}>
					<textarea
						readOnly
						value={clear}
						placeholder="Decrypted message will appear here"
						style={{
							resize: 'none',
							font: 'inherit',
							color: 'inherit',
							letterSpacing: 'inherit',
							border: '1px solid lightgrey',
							borderRadius: '0.2em',
							padding: '0.5em'
						}}></textarea>
				</div>
			</div>
		)
	}
}
