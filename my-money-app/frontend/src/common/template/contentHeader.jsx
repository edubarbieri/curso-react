import React, { Component } from 'react';

class ContentHeader extends Component {
	render() {
		return (
			<section className='content-header'>
				<h1>{this.props.title}</h1> <small>{this.props.small}</small>
			</section>
		);
	}
}

export default ContentHeader;
