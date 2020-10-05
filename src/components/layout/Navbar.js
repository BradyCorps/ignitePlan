import React from 'react';
import { Link } from 'react-router-dom';
import SIL from './SignedInLinks';
import SOL from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = props => {
	const { auth } = props;
	// Boolean true if login --> false if not --> if UID doesnt exist === false --> showing SIL
	const links = auth.uid ? <SIL /> : <SOL />;
	return (
		<nav className="nav-wrapper blue-grey darken-3">
			<div className="container">
				<Link to="/" className="brand-logo left">
					IgnitePlan{' '}
					<span role="img" aria-label="fire">
						🔥{' '}
					</span>
				</Link>
				{links}
			</div>
		</nav>
	);
};

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
	};
};

export default connect(mapStateToProps)(Navbar);
