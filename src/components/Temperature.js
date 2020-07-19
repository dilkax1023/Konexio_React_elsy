import React from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider';

class Temperature extends React.Component {
	render() {
		return (
			<div className='box col-md-3 col-6'>
				<Icon name='wb_sunny' color='yellow' />
				<h5 className='mb-3'>
					{this.props.temperature}
					{this.props.unit}
				</h5>
				<Slider
					min={this.props.min}
					max={this.props.max}
					value={this.props.temperature}
					onChange={this.props.onChange}
				/>
			</div>
		);
	}
}

export default Temperature;
