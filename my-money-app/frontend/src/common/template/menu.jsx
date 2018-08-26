import React, { Component } from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';

class Menu extends Component {
	render() {
		return (
			<ul className="sidebar-menu">
				<MenuItem path='/' icon='dashboard' label='Dashboard' />
				<MenuTree label='Cadastro' icon='edit'>
					<MenuItem label='Ciclos de pagamento' path='billingCycles' icon='usd'/>
				</MenuTree>
			</ul>
		);
	}
}

export default Menu;
