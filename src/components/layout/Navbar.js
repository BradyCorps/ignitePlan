import React from 'react';
import { Link } from 'react-router-dom';
import SIL from './SignedInLinks';
import SOL from './SignedOutLinks';

const Navbar = () => {
	return (
		<nav className="nav-wrapper blue-grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo left">
					IgnitePlan
				</Link>
				<SIL />
				<SOL />
			</div>
		</nav>
	);
};

export default Navbar;
