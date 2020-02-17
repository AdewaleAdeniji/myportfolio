import React,{Component} from 'react';

export default class App extends Component{
constructor(props){
	super();
	
}
	render(){
	return (
	     <div className="bg-dark">
        <div className="container">
          <div className="row col-md-12">
            <form>
            <input type="email" required="true" placeholder="Email Address"/>
            <button>
            </form>
        </div>
       </div>
			)  
	}
}
