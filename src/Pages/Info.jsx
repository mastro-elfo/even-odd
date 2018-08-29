import React, { Component } from 'react';

import Info from "../Components/Info";

export default class InfoPage extends Component {
	render(){
		return (
			<div>
				<div>
					<button
						style={{
							background: 'transparent',
							cursor: 'pointer',
							border: 'none',
							padding: 0,
							margin: 0
						}}
						title="Back"
						onClick={()=>this.props.history.goBack()}>
						Back
					</button>
				</div>

				<Info/>
			</div>
		)
	}
}
