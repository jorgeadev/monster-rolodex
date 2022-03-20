import React from 'react';

class Buttons extends React.Component {
	constructor() {
		super();
		this.handleClick2 = this.handleClick1.bind(this);
	}

	handleClick1() {
		console.log('Button 1 clicked');
	}

	handleClick3 = () => {
		console.log('Button 3 clicked');
	}

	render() {
		return (
			<div>
				<button onClick={ this.handleClick1() }>click 1</button>
				<button onClick={ this.handleClick1 }>click 2</button>
				<button onClick={ this.handleClick2 }>click 3</button>
				<button onClick={ this.handleClick3 }>click 4</button>
			</div>
		);
	}
}

export default Buttons;