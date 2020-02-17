import React,{Component} from 'react';
import './nav.css';
import Logo from './1.jpg';
import './anim.css';
import {Link} from 'react-router-dom';

export default class App extends Component{
	constructor(){
		super();
	this.state = {
		menu : false,
	}
	this.handleMenu = this.handleMenu.bind(this);
}
	handleMenu(){
		if(this.state.menu){
			document.getElementById('modalmenu').style.display="none";
			this.setState({menu:false});
		}
		else {
			document.getElementById('modalmenu').style.display="block";
			this.setState({menu:true});
		}
	}
	render(){
		return (
			<div>
			<nav>
				<img src={Logo} className="navlogo" alt="Logo"/>
				<ul className="desktoplink">
					<li> <Link to="/"><i className="fa fa-home"></i> Home</Link></li>
					<li> <Link to="/projects"> <i className="fa fa-project-diagram"></i> Projects</Link></li>
					<li> <Link to="/skills"> <i className="fa fa-hammer"></i> Skills</Link></li>
					<li> <Link to="/experience"> <i className="fa fa-archive"></i> Experience</Link></li>
					<li> <Link to="/about"> <i className="fa fa-user"></i> About Me</Link></li>
					
					<li> <a href="https://twitter.com/DevFeranmi" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter ico"></i> </a></li>
					<li> <a href="mailto:devferanmi@gmail.com" target="_blank" rel="noopener noreferrer"> 
					<i className="fa fa-envelope ico"></i> 
					</a></li>
					<li> <a href="https://github.com/AdewaleAdeniji" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github ico"></i> </a></li>
				</ul>
				<button className="toggler" onClick={this.handleMenu}>
					<span className="toggler-icon"></span>
				</button>

			</nav>
			<div className="modalmenu " id="modalmenu" onClick={this.handleMenu}>
			<span className="closebtn fa fa-times"  onClick={this.handleMenu}></span>
				<ul className='mylinks'>
					<li> <Link to="/"><i className="fa fa-home"></i> Home</Link></li>
					<li> <Link to="/projects"> <i className="fa fa-project-diagram"></i> Projects</Link></li>
					<li> <Link to="/experience"> <i className="fa fa-archive"></i> Experience</Link></li>
					<li> <Link to="/about"> <i className="fa fa-user"></i> About Me</Link></li>
					<li> <a href="https://twitter.com/DevFeranmi" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter ico"></i> Twitter</a></li>
					<li> <a href="mailto:devferanmi@gmail.com" target="_blank" rel="noopener noreferrer"> 
					<i className="fa fa-envelope ico"></i> EMail
					</a></li>
					<li> <a href="https://github.com/AdewaleAdeniji" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github ico"></i> GitHub</a></li>
				</ul>
			</div>
			</div>
				)
	}	
}