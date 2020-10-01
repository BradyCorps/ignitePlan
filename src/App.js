import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				{/* Switch tag === ensuring only one route is loaded at a time --> use 'exact' to ensure the the path is loaded up when it matches completely, not just if key (ie. '/') exists*/}
				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/project/:id" component={ProjectDetails} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route path="/create" component={CreateProject} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
