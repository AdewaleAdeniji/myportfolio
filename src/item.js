import React,{Component} from 'react';
import './item.css';
import Swal from 'sweetalert2';

class App extends Component{
	constructor(props){
	super();

	}
	handleMore(links,about,used){
		var cfmbtn = true;
		//console.log(links);
		if(links===undefined||links===""){
			cfmbtn = false;
		}
		//console.log(cfmbtn);
		Swal.fire({
			icon:'success',
			text:about,
			confirmButtonColor:'#5cb',
			footer:'Technologies Used:'+used,
			showConfirmButton:cfmbtn,
			showCancelButton:true,
			confirmButtonText:'Visit App',
			cancelButtonText:"Back",
			backdrop:'rgba(0,0,0,0.3)',	
		})
		.then((result)=>{
			if(result.value){

				window.open(links);
			}
				
		})
	}
	render(){
		

	return (
		<div className="projectitem" style={{"backgroundImage":"url("+this.props.image+")"}} title={this.props.about}>
			<div>	{this.props.name} <br/>
				<button onClick={this.handleMore.bind(this,this.props.link,this.props.about,this.props.used)}>Details / Visit<i className="fa fa-angle-double-right"></i> </button>
			</div>

		</div>
	)
	}
}
export default App;