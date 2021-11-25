import React from 'react';
import { NavLink } from 'react-router-dom'

function Navigation() {
	return <nav>
		<div className="nav-wrapper red accent-3 pd-1 z-depth-3">
			<a href="/" className="brand-logo center">R+T</a>
			<ul  className="left hide-on-med-and-down">
				<li><NavLink to="/">To do</NavLink></li>
				<li><NavLink to="/about">Info</NavLink></li>
			</ul>
		</div>
	</nav>
};

export default Navigation;