import React,{Component} from 'react';
import './projects.css';
import Item from './item.js';

import NoteApp from './noteapp.png';
import Obill from './obill.png';
import Novling from './novling.PNG';
import LinkApp from './linkapp.png';
import WowApp from './wowapp.png';
import News9ja from './news9jar.png';
import LoveApp from './loveapp.png';
import BatteryLife from './ba3.png';
import DevFest from './devfest.png';
import pulumi from './pulumi.png';
import SwipeChat from './swipechat.png';

export default class App extends Component{
	constructor(props){
		super();

	}
	render(){
		return(
			<React.Fragment>
			<h1>Exciting Projects</h1>
			<div className="items">

			<Item name="Note App" image={NoteApp} link="https://mynoteapp.netlify.com" about="NoteApp is a single page progressive web app which makes it easy to save and edit your notes easily." used="React(Redux),SweetAlert,HTML5,CSS3,PWA,SPA"/>
			<Item name="OBill" image={Obill} link="https://obill.netlify.com" about="Obill is a single page app that displays full contact details of senators representing different constituencies accross Nigeria.This was developed to make sure members of each constituents have an uninterrupted access to the senator representing them" used="HTML5,CSS3,JAVASCRIPT(ES6),JSON API"/>
			</div>
			<div className="items">
			<Item name="NovLing" image={Novling} link="https://novling.000webhostapp.com" about="Apart from coding I like reading stuffs a lot from code docs to language docs,updates releases, novels and as expected I write novels too.So I had problems having my own online content,So I built NovLing where I post my stories"
			used="HTML5,CSS3,JAVASCRIPT,RESTFUL APIs,PHP,SQL,MySQL"/>
			<Item name="Link App" image={LinkApp} about="LinkApp helps to save links for future use,So instead of keeping so many tabs open on your browser,LinkApp can help you keep links for future use.." used="HTML5,CSS3,JAVASCRIPT(ES6),RESTFul APIs,PHP,SQL,MySQL,SPA,PWA" link="https://linksapp.netlify.com"/>
			</div>
			<div className="items">
			<Item name="Wow App" image={WowApp} link="https://wowapp.netlify.com" about="WowApp was developed to solve the problem of forgetting birthdays of your loved ones,It makes it easier to keep friends birthdays" used="HTML5,CSS3,JAVASCRIPT(ES6),PWA,SPA)"/>
			<Item name="News App" image={News9ja} link="https://news9jar.netlify.com" about="News9jar is a news web app.News updates are fetched from google's news api while daily motivational quotes are fetched from quotes.rest.Makes it easier to know what's trending"/>
			</div>
			<div className="items">
			<Item name="Love Calculator" image={LoveApp} link="https://loveapp.netlify.com" about="Love was just a fun app where you enter two names of lovers(Male and Female) then It returns your love strength..It fetches the love strength from a rapidapi love Calculator" used="HTML5,CSS3,JAVASCRIPT(ES6),REACT(Redux),RESTFul API"/>
			<Item name="Battery Life" image={BatteryLife} link="https://batterylife.netlify.com" about="BatteryLife is a smart web app for monitoring your battery life and statistics.This app makes it easier to measure how your battery charged at each percentage and of course how it discharged from each percentage and so many other functionalities like the text to speech which talks to you about your battery level" used="HTML5,CSS3,JAVASCRIPT(ES6),JQUERY,SWEETALERT,Bootstrap4"/>
			</div>
			<div className="items">
			<Item name="DevFest Landing Page" image={DevFest} link="https://devfestogb.netlify.com" about="So devfest was coming and I built a dynamic Landing page for the Google Devloper Group in my locality which in turn increased the publicity of the event" used="HTML5,CSS3,JAVASCRIPT,Bootstrap4,JQUERY"/>
			<Item name="Documentation Landing Page" image={pulumi} link="https://sweetbot.netlify.com" about="A simple Documentation page" used="HTML5,CSS3,JAVASCRIPT(ES6)"/>
			</div>
			<div className="items">

			<Item name="Swipe Chat" image={SwipeChat} link="" about="It's a Single Page and Progressive web app which utilises the whole power of REST API built with PHP to chat,add friends,create new account,log in,remove friends ,Join groups right on one page." used="HTML5,CSS3,JAVASCRIPT(ES6),REACT,PHP,SQL,MySQL"/>
			
			</div>
			</React.Fragment>
			)
	}
}