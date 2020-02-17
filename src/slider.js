import React,{Component} from 'react';

import './slider.css';


export default class App extends Component{

componentDidMount(){
	
	//window.setInterval(type,400);	
}
	render(){
		return (
			<div className="hero-slider">
				<div className="overlay fadeInUp fadeIn slideIn">
				<span>
					Hi,I'm <i className="letterwords" id="myname">Feranmi</i> <br/>
					<b className="aboutletters">I am a FrontEnd Developer </b>
					</span>
				</div>
			</div>
				)
	}	
}