import React from 'react';
import { Card } from '../Card/Card';
import './CardList.css';

export const CardList = (props) => {
	console.log(props);
	return (
		<div className="card-list">
			{
				props.monsters.map((monster, index) => {
					return (
						<div key={ index }>
							<Card key={ index } monster={ monster } />
						</div>
					)
				})
			}
		</div>
	)
};