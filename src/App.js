import './App.css';
import React, { Component } from 'react';
import { CardList } from "./components/CardList/CardList";
import Buttons from "./components/Buttons/Buttons";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			monsters: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}

	render() {
		const { monsters, searchField } = this.state;
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<input type="search" placeholder="Search monsters" onChange={ event => {
					this.setState({ searchField: event.target.value }, () => {
						console.log(this.state)
					});
				} } />
				<CardList monsters={ filteredMonsters } />
				{/*<Buttons />*/}
			</div>
		);
	}
}

export default App;
