import React from 'react';
import { NavLink } from 'react-router-dom'; //NavLink === access to active class within react-dom when certain link is active

const SOL = () => {
	return (
		<ul className="right">
			<li>
				<NavLink to="/">Sign-Up</NavLink>
			</li>
			<li>
				<NavLink to="/">Login</NavLink>
			</li>
		</ul>
	);
};

export default SOL;
