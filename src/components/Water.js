import React from 'react';
import Icon from '../components/core/Icon';

class Water extends React.Component {
	render() {
		return (
			<div className='box col-md-3 col-6'>
				<Icon name='invert_colors' color='blue' />
				<h3>
					{this.props.water} {this.props.unit}
				</h3>
			</div>
		);
	}
}

export default Water;
