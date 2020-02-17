import React,{Component} from 'react';
import './footer.css';
export default class App extends Component {
	constructor(props){
		super();
		this.state ={
			email:'',
			message:'',
			error:true,
			msg:"Drop a Message",
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	handleMsg(e){
		let msg =  e.target.value;
		//console.log(msg);
		if(msg.trim()===""){
			this.setState({msg:"Message should not be empty"});
			this.setState({error:true});
			e.preventDefault();
			return false;

		}
		else if(msg.trim().length<10){
			this.setState({msg:"Message should  be more than 10 characters"});
			this.setState({error:true});	
			e.preventDefault();
			return false;
		}
		else {
			this.setState({msg:"Drop a message"});
			this.setState({error:false});
			return true;
		}
	}
	handleEmail(e){
		var email = e.target.value;
		if(email.indexOf("@")===-1){
			this.setState({msg:"Incorrect or Invalid Email Address"});
			this.setState({error:true});
			e.preventDefault();
			return false;
		}
		else if (email.indexOf(".")===-1) {
			this.setState({msg:"Email should contain a \".\" "});
			this.setState({error:true});
			e.preventDefault();
			return false;
		}
		else if (email.indexOf("+")>-1) {
			this.setState({msg:"Email should not contain symbols"});
			this.setState({error:true});
			e.preventDefault();
			return false;
		}
		else if (email.trim()==="") {
			this.setState({msg:"Email should not be empty"});
			this.setState({error:true});
			e.preventDefault();
			return false;
		}
		else {
			this.setState({msg:"Drop a message"});
			this.setState({error:false});
			return true;
		}
	}
	handleSubmit(e){
		if(this.state.error){
			this.setState({msg:"Please fill in empty form fields"});
			e.preventDefault();
			return false;
		}
		else {
			return true;
		}
	}
	render(){
	return (
		<div className="footer">
			<div className="items">
			<div className="form">
				<form data-netlify="true" method="POST" id="form">
				<h4>{this.state.msg}</h4>
					<input type="text" placeholder="Enter a message"  onChange={this.handleMsg.bind(this)} required={true} name="Email Address"/>
					<input type="email" placeholder="Your Email Address" onChange={this.handleEmail.bind(this)} name="Email Address" required={true}/>
					<button type="submit" name="Submit" onClick={this.handleSubmit.bind(this)}>Send</button>
				</form>
			</div>
			
			</div>
			<div className="bottom">
				&copy;2020 Developed by DevFeranmi (devferanmi@gmail.com)
			</div>
		</div>
	)
	}
}