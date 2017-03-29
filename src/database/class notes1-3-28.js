class Shape{
	constructor(){
		this.color = 'black'

	}

	distort(){
		//Shape.prototype.distort = function({})
	}

	calculateArea(){

	}
}

class Square extends Shape{ //inherites everything included in Shape
}

function Square(){
}

Square.prototype = Object.create(Shape)


/////////////////////////////////////////////////
//getInitialState doesn't exist and getDefaultProps doesn't exist in class

import React, {Component} from 'react'

class MyComponent extends Component{
	constructor(props){
		super(props) //have to call super and pass it props in order to use props inside constructor function

		this.state = { //have to call super to use this.state => this.state is equivelant to getinitalstate
			foo: props.foo
		}

		handleClick = (e)=>{
			console.log("button was clicked")
		}
	}

	render(){
		return(
			<div>
				<button onClick={this.handleClick}>Click Me</button>
			</div>
		)
	}
}

