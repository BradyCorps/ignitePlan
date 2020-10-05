import React, { Profiler } from 'react';
import { NavLink } from 'react-router-dom'; //NavLink === access to active class within react-dom when certain link is active
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SIL = props => {
	return (
		<ul className="right">
			<li>
				<NavLink to="/create">New Project</NavLink>
			</li>
			<li>
				<button className="btn transparent" onClick={props.signOut}>
					Log-Out
				</button>
			</li>
			<li>
				<NavLink to="/" className="btn btn-floating pink lighten-1 radius">
					{props.profile.initials}
				</NavLink>
			</li>
		</ul>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => dispatch(signOut()),
	};
};

export default connect(null, mapDispatchToProps)(SIL);
