/**
 * @file 根组件
 * @author 残梦
 * @createDate 2019-06-30
 */

import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import WriterArticle from './pages/writerArticle'



class App extends PureComponent {
	render() {
		return (
			<Provider store={store}>
					<BrowserRouter>
						<div>
							<Header />
							<Route path="/" exact component={Home} />
							<Route path="/detail/:id" exact component={Detail} />
							<Route path="/login" exact component={Login} />
							<Route path="/writer_article" exact component={WriterArticle} />
						</div>
					</BrowserRouter>
			</Provider>
		)
	}
}

export default App;