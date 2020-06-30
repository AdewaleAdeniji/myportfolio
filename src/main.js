import React,{Component} from 'react';
import {BrowserRouter,Route,HashRouter} from 'react-router-dom';
import Nav from './nav';
import App from './App';
import Footer from './footer';
//import Exp from './exp';
import About from './about.js';
import Exp from './experience';
import Skills from './skills';
import Projects from './projects.js';

export default class Main extends Component{
	render(){
		return (
			<HashRouter>
			<Nav />
			<Route exact path="/" component={App}/>
			<Route path="/experience" component={Exp}/>
			<Route path="/about" component={About}/>
			<Route path="/projects" component={Projects}/>
			<Route path="/skills" component={Skills}/>
			<Footer />
			</HashRouter>
		)
	}	

}