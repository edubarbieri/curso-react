import React, { Component } from 'react';
import Navbar from './Navbar';
class Header extends Component {
	render() {
		return (
			<header className='main-header'>
				<a href="/#/" className='logo'>
					<span className='logo-mini'><b>My</b>M</span>
					<span className="logo-lg">
						<i className="fa fa-money"></i>
						<b> My</b> Money
					</span>
				</a>
				<nav className="navbar navbar-static-top">
					<Navbar />
				</nav>
			</header>
		);
	}
}

export default Header;
