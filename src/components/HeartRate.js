import React from 'react';
import Icon from '../components/core/Icon';
class HeartRate extends React.Component {
	render() {
		return (
			<div className='box col-md-3 col-6'>
				<Icon name='favorite' color='red' />
				<p>{this.props.heart}</p>
			</div>
		);
	}
}

export default HeartRate;
