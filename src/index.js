// import _ from 'lodash';

import  "./style.css"
import Icon from "./icon.gif"
import Data from './data.xml';

import {cube} from './math.js';

import printMe from './print.js';


function component() {

	var element = document.createElement('div');
	var btn = document.createElement('button');
	var element = document.createElement('pre');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = ['Hello webpack', '5 cubed is equal to ' + cube(5)].join(' \n ');
	element.classList.add('hello');

	var icon = new Image();
	icon.src = Icon;
	element.appendChild(icon)

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn)

	return element;
}

console.log(Data)

document.body.appendChild(component());

//
// if(module.hot){
// 	module.hot.accept("./print.js",function(){
// 		console.log('Accepting the updated printMe module!');;
// 		printMe();
// 	})
// }