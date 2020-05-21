import React,{Component} from 'react';
import './skills.css';


export default class Skill extends Component{
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
				
					<div className="skill" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
						<sup>{this.props.name}</sup>
						<sub className="sub">{this.props.details}</sub> 
						
					</div>

				
			)
	}
}