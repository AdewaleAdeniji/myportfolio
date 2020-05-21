import React,{Component} from 'react';
import './skills.css';
import Skill from './skill.js';

export default class Skills extends Component{
	constructor(props){
		super();
	}
	handleOver(){
		document.querySelectorAll("sub").forEach((item,index)=>{
			item.style.opacity="1";
			

		})
		document.querySelectorAll(".skill .progess").forEach((item,index)=>{
			item.style.width="150px";
			item.style.opacity = "1";

		})
	}
	handleOut(){
		document.querySelectorAll("sub").forEach((item,index)=>{
			item.style.opacity="0";
			

		})
		document.querySelectorAll(".skill .progess").forEach((item,index)=>{
			item.style.width="0px";
			item.style.opacity = "0";
		})
	}

	render(){
		return(
				<div className="skills" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
					<h2>Technical Skills</h2>
					<div className="items">
					<Skill name="HTML5"details="HyperText MarkUp Language"/>
					<Skill name="CSS3" details="Cascading Stylesheet"/>
					</div>
					<div className="items">
					<Skill name="BootStrap4" details="CSS3 UI LIBRARY"/>
					<Skill name="Materialize" details="CSS3 UI LIBRARY"/>
					</div>
					<div className="items">
					<Skill name="Javascript" details="Vanilla,JQUERY,SweetAlert"/>
					<Skill name="React" details="Javascript UI Framework"/>
					</div>
					<div className="items">
					<Skill name="Vue" details="Javascript UI Framework"/>
					<Skill name="PHP" details="(HyperText - Preprocessor) Backend/Server-Side programming Language"/>
					</div>
					<div className="items">
					<Skill name="SQL" details="(Structured Query Language) Database Query Language"/>
					<Skill name="MySQL,MongoDB,OracleDB" details="Databases"/>
					</div>
					<div className="items">
					<Skill name="Github" details="Git and Github for collaboration"/>
					<Skill name="Figma" details="UI design mockups"/>
					</div>
					<div className="items">
					<Skill name="Node Package Manager" details=""/>
					<Skill name="Continuos Integration and deployment" details="Netlify,Heroku and Azure"/>
					</div>
					<div className="items">
					<Skill name="Functional Tests" details="Jest"/>
					<Skill name="RestFUL APIs" details="RestFUL APIs consumption"/>
					</div>
				</div>
			)
	}
}