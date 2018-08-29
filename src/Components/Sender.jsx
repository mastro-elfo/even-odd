import React, { Component } from 'react';

import CryptoJS from 'crypto-js';
import uniqueString from 'unique-string';

import IconKey from '../Assets/key.svg';

export default class Sender extends Component {
	constructor(props){
		super(props);
		this.state = {
			key: '',
			clear: '',
			encrypted: ''
		}
	}

	onKeyChange(key){
		this.setState({
			key: key
		})
		try {
			this.setState({
				encrypted: CryptoJS.AES.encrypt(this.state.clear, key)
			})
		}
		catch(e){}
	}

	onMessageChange(message){
		this.setState({
			clear: message
		})
		try {
			this.setState({
				encrypted: CryptoJS.AES.encrypt(message, this.state.key)
			})
		}
		catch(e){}
	}

	render(){
		return (
			<div>
				<h1 style={{
						paddingLeft: '1rem'
					}}>Sender</h1>
				<div style={{
						padding: '1em'
					}}>
					<input
						onChange={(e)=>this.onKeyChange(e.target.value)}
						value={this.state.key}
						placeholder="Choose a key"
						style={{
							color: 'inherit',
							font: 'inherit',
							letterSpacing: 'inherit',
							border: '1px solid lightgrey',
							borderRadius: '0.2em',
							padding: '0.5em'
						}}/>
					<button
						onClick={()=>this.onKeyChange(uniqueString().substr(0, 8))}
						title="Click to generate a new random key"
						style={{
							border: 'none',
							background: 'transparent',
							cursor: 'pointer',
							width: '2em',
							height: '2em',
							padding: '0.5em',
							margin: '0'
						}}
						><img alt="key" src={IconKey} style={{height: '100%'}}/></button>
				</div>
				<div style={{
						padding: '1em'
					}}>
					<textarea
						onChange={(e)=>this.onMessageChange(e.target.value)}
						value={this.state.clear}
						placeholder="Write your message here"
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
						value={this.state.encrypted}
						placeholder="Encrypted message will appear here"
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
