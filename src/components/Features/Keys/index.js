import React, { Component } from 'react';
import './style.css';

class Keys extends Component {
	handleClick() {
		this.props.onValue(this.props.value)
	}
	render() {
	    return (
	      <div className="btn">
	      	<button onClick={this.handleClick.bind(this)} >{this.props.value}</button>
	      </div>
	    );
	}
}

export default Keys;
