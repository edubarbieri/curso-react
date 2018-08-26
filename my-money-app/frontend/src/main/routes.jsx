import React from 'react';
import {Route, Router, Redirect, hashHistory, IndexRoute} from 'react-router';

import BillingCycle from '../billingCycle/billingCycle';
import Dashboard from '../dashboard/dashboard';
import App from './app';
import AuthOrApp from './authOrApp';

export default props => (
	<Router history={hashHistory}>
		<Route path="/" component={AuthOrApp}>
			<IndexRoute component={Dashboard}/>
			<Route path='billingCycles' component={BillingCycle}/>
		</Route>
		<Redirect from='*' to='/'/>

	</Router>
);
