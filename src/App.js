/**
 * @file 根组件
 * @author 残梦
 * @createDate 2019-06-30
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home';



class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Header />

					<BrowserRouter>
						<div>
							<Route path="/" exact component={Home} />
						</div>
					</BrowserRouter>
				</div>
			</Provider>
		)
	}
}

export default App;