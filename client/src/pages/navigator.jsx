import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from 'react-router-dom';
import { ErrorNotFoundComponent } from '../components/error-component/error-component';
import { ControlPage } from './control-page/control-page';
import { IndexPage } from './index-page/index-page';

export const Navigator = () => (
	<Router>
		<Routes>
			<Route exact path='/' element={<IndexPage/>}/>
			<Route exact path='/control' element={<ControlPage/>}/>
			<Route element={<ErrorNotFoundComponent/>}/>
		</Routes>
	</Router>
);
