import React from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider';

class Person extends React.Component {
	render() {
		const { min, max, steps, onChange } = this.props;

		return (
			<div className='box col-md-3 col-6'>
				<Icon name='directions_walk' />
				<h5 className='mb-3'>
					{this.props.steps}
					{this.props.unit}
				</h5>
				<Slider min={min} max={max} value={steps} onChange={onChange} />
			</div>
		);
	}
}

export default Person;
/**
 <div className='box col-md-3 col-6'>
					<span
						style={{ fontSize: '100px', color: 'black' }}
						className='material-icons'>
						invert_colors
					</span>
				</div>
				<div className='box col-md-3 col-6'>
					<span
						style={{ fontSize: '100px', color: 'black' }}
						className='material-icons'>
						favorite
					</span>
				</div>
				<div className='box col-md-3 col-6'>
					<span
						style={{ fontSize: '100px', color: 'black' }}
						className='material-icons'>
						wb_sunny
					</span>
				</div>
 */
