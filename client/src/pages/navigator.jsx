import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import { ErrorNotFoundComponent } from '../components/error-component/error-component';
import { ControlPage } from './control-page/control-page';
import { IndexPage } from './index-page/index-page';


export const Navigator = () => (
	<Router>
		<Switch>
			<Route exact path='/' component={IndexPage}/>
			<Route exact path='/control' component={ControlPage}/>
			<Route component={ErrorNotFoundComponent}/>
		</Switch>
	</Router>
);
