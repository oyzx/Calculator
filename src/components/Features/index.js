import React, { Component } from 'react';
import Keys from './Keys';
import './style.css';

class Features extends Component {
	constructor(props, context) {
		super();
	}
	handleValue(val) {
		this.props.getSum(val)
	}
  	render() {
	    return (
	      <div>
	        <div className="keys">
	        	<Keys value="7" onValue={this.handleValue.bind(this,7)} />
	        	<Keys value="8" onValue={this.handleValue.bind(this,8)} />
	        	<Keys value="9" onValue={this.handleValue.bind(this,9)} />
	        	<Keys value="+" onValue={this.handleValue.bind(this,'+')} />
	        	<Keys value="4" onValue={this.handleValue.bind(this,4)} />
	        	<Keys value="5" onValue={this.handleValue.bind(this,5)} />
	        	<Keys value="6" onValue={this.handleValue.bind(this,6)} />
	        	<Keys value="-" onValue={this.handleValue.bind(this,'-')} />
	        	<Keys value="1" onValue={this.handleValue.bind(this,1)} />
	        	<Keys value="2" onValue={this.handleValue.bind(this,2)} />
	        	<Keys value="3" onValue={this.handleValue.bind(this,3)} />
	        	<Keys value="*" onValue={this.handleValue.bind(this,'*')} />
	        	<Keys value="重置" onValue={this.handleValue.bind(this,'重置')} />
	        	<Keys value="0" onValue={this.handleValue.bind(this,0)} />
	        	<Keys value="=" onValue={this.handleValue.bind(this,'=')} />
	        	<Keys value="/" onValue={this.handleValue.bind(this,'/')} />
	        </div>
	      </div>
	    );
  	}
}

export default Features;
