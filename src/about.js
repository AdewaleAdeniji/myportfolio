import React,{Component} from 'react';
import './about.css';
export default class App extends Component{
	constructor(props){
		super();
			// this.handleOver = this.handleOver.bind(this);
			// this.handleOut = this.handleOut.bind(this);
	}
	// handleOver(){
	// 	//console.log("over");
	// 	document.getElementById("namein").style.display="block";
	// }
	// handleOut(){
	// 	//console.log("out");
	// 	document.getElementById("namein").style.display="none";
	// }
	render(){
		return (
			<div className="aboutsection">
			<div className="imgsection">
				
				<div id="namein" className="fadeInUp">Oluwaferanmi Adeniji</div>
			</div>
			<div className="text-section">
				 I'm a Software Engineer willing to go up any length in optimizing, building and developing exceptional,
					scalable and high performance web applications. I have an eye for building pixel perfect, beautiful and
					intuitive apps.
					I am a self-starter who is able to take ownership of projects and love being challenged to build unique
					software solutions.I have passion for delivering effective and intuitive user interfaces for consumer and/or
					business users.
					I have excellent analytical skills, including the ability to understand and form clear arguments around
					complex information
			</div>
			</div>
				)
	}	
}