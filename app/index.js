import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {

		};
	}

	render(){
		return (
				<div>
					'Hello Jason!!'
				</div>
			);
	}
}

ReactDom.render(<App />,document.getElementById('app'));