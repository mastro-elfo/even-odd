import React, { Component } from 'react';

// import ReactSwipeEvents from 'react-swipe-events'
import Grid from '@material-ui/core/Grid';

import Sender from './Sender';
import Recipient from './Recipient';

export default class Dashboard extends Component {
	render(){
		return (
			<div style={{
					padding: "1em"
				}}>
				<Grid container
					spacing={40}
					justify="center">

					<Grid item xs={6}>
						<Sender/>
					</Grid>

					<Grid item xs={6}>
						<Recipient/>
					</Grid>
				</Grid>
			</div>
		)
	}
}

// export default class Dashboard extends Component {
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			left: 0,
// 			originalLeft: 0,
// 			swiping: false,
// 			orientation: window.innerWidth > window.innerHeight? 'landscape' : 'portrait'
// 		};
//
// 		this.onSwiped = this.onSwiped.bind(this);
// 		this.onSwiping = this.onSwiping.bind(this);
//
// 		window.addEventListener('resize', (e) => {
// 			this.setState({
// 				orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait'
// 			})
// 		})
// 	}
//
// 	onSwiping(e, originalX, originalY, currentX, currentY, deltaX, deltaY){
// 		const swipe = this.state.originalLeft +deltaX
// 		if(this.state.orientation === 'portrait') {
// 			this.setState({
// 				left: swipe > 0 ? 0 :
// 					swipe < -window.innerWidth ? -window.innerWidth : swipe,
// 				swiping: true
// 			});
// 		}
// 	}
//
// 	onSwiped(e, originalX, originalY, currentX, currentY, deltaX, deltaY){
// 		const swipe = deltaX /window.innerWidth > 0.2 ? 0 :
// 			deltaX /window.innerWidth < -0.2 ? -window.innerWidth : this.state.originalLeft;
// 		this.setState({
// 			left: swipe,
// 			originalLeft: swipe,
// 			swiping: false
// 		})
// 	}
//
// 	render(){
// 		return (
// 			<ReactSwipeEvents
// 				onSwiping={this.onSwiping}
// 				onSwiped={this.onSwiped}>
// 				<div style={{
// 						width: this.state.orientation === 'landscape'
// 							? '100%' : '200%',
// 						position: 'relative',
// 						left: this.state.orientation === 'portrait' ? this.state.left : 0,
// 						transition: !this.state.swiping ? "left ease 0.25s" : "none",
// 					}}>
//
// 					<div style={{
// 							width: '50%',
// 							float: 'left'
// 						}}>
// 						<Sender/>
// 						{
// 							this.state.orientation === 'portrait' &&
// 							<button
// 								style={{
// 									background: 'transparent',
// 									border: 'none',
// 									display: 'block',
// 									margin: 'auto',
// 									padding: 0,
// 									cursor: 'pointer'
// 								}}
// 								onClick={()=>this.setState({left: -window.innerWidth, originalLeft: -window.innerWidth, swiping: false})}
// 								title="Recipient">
// 								<img alt="⮕"/>
// 							</button>
// 						}
// 					</div>
//
// 					<div style={{
// 							width: '50%',
// 							float: 'left'
// 						}}>
// 						<Recipient/>
// 						{
// 							this.state.orientation === 'portrait' &&
// 							<button
// 								style={{
// 										background: 'transparent',
// 										border: 'none',
// 										display: 'block',
// 										margin: 'auto',
// 										padding: 0,
// 										cursor: 'pointer'
// 									}}
// 								onClick={()=>this.setState({left: 0, originalLeft: 0, swiping: false})}
// 								title="Sender">
// 								<img alt="⬅"/>
// 							</button>
// 						}
// 					</div>
//
// 					<div style={{clear: 'both'}}></div>
// 				</div>
// 			</ReactSwipeEvents>
// 		)
// 	}
// }
