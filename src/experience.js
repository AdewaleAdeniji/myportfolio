import React,{Component} from 'react';
import './exp.css';

export default class App extends Component{
	handleOver(){
		document.getElementById('datefor').style.opacity=1;
	}
	handleOut(){
		document.getElementById('datefor').style.opacity=0;
	}
	render(){
		return(
			<div className="exp">
				<h1>Work Experience</h1>
				<div className="item" onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
					<span className="title">Koji</span>
					<span className="jobtitle">Software Engineer</span>
					<span className="about">
						<ul>
						<li>
						Build and deploy user oriented games for the gaming platform
						</li>
						<li>
					Collaborated with the innovation and research teams to build engaging games for the wide range of users on Koji
					</li>
					<li>
					Build Interactive javascript games with Customisable Graphical Interfaces and VCCs.
					</li>
					</ul>
					</span>
					<span id="datefor">October 2019 - Date</span>
				</div>
				<div className="item">
					<span className="title">Andela</span>
					<span className="jobtitle">Software Mentor</span>
					<span className="about">
						<ul>
						<li>
						Develops Software Solutions that solve day to day problems challenging the Nigerian Society and
monitor the Software

Development Life cycle from start to finish
						</li>
						<li>
					Mentors,Teach and Advocates for upcoming developers
					</li>
					<li>
					Ensure that the quality of design implementation and user experience is the very best it can be
(design and development 

work very closely together )
					</li>
					</ul>
					</span>
					
				</div>
			</div>
			)
	}
}
