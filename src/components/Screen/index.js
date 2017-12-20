import React, { Component } from 'react';
import './style.css';

class Screen extends Component {
	render() {
		return (
			<div>
				<div>
					<p>当前运算符：{this.props.operator}</p>
				</div>
				<div className="screen" >
					{this.props.sum} {this.props.operator} {this.props.was}
				</div>
			</div>
		)
	}
}

export default Screen;