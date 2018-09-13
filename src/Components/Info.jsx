import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';

export default class Info extends Component {
	render(){
		return (
			<div style={{
					padding: "1em"
				}}>
				<Typography variant="title" color="secondary">
					General Info
				</Typography>
				<Typography paragraph>
					Mastro-Elfo
				</Typography>

				<Typography variant="title" color="secondary">
					License MIT
				</Typography>
				<Typography paragraph>
					Copyright (c) 2018 mastro-elfo<br/>
					<br/>
					Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:<br/>
					<br/>
					The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.<br/>
					<br/>
					THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
				</Typography>

				<Typography variant="title" color="secondary">
					Cookie
				</Typography>
				<Typography paragraph>
					This app is cookie free since 2018.
				</Typography>
			</div>
		)
	}
}
