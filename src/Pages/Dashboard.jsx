import React, { Component } from 'react';

import Dashboard from "../Components/Dashboard";

import IconInfo from '../Assets/info.svg';

export default class DashboardPage extends Component {
	render(){
		return (
			<div>
				<div style={{textAlign: 'right'}}>
					<button
						style={{
							background: 'transparent',
							cursor: 'pointer',
							border: 'none',
							padding: 0,
							margin: 0
						}}
						title="About this app"
						onClick={()=>this.props.history.push('/info')}>
						<img alt="Info" src={IconInfo}/>
					</button>
				</div>

				<Dashboard/>
			</div>
		)
	}
}
