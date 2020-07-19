import React from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider';

class HeartRate extends React.Component {
	render() {
		const { min, max, heart, onChange } = this.props;

		return (
			<div className='box col-md-3 col-6'>
				<Icon name='favorite' color='red' />
				<h5 className='mb-3'>
					{this.props.heart}
					{this.props.unit}
				</h5>
				<Slider min={min} max={max} value={heart} onChange={onChange} />
			</div>
		);
	}
}

export default HeartRate;
