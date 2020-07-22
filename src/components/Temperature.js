import React from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider';

class Temperature extends React.Component {
	render() {
		const { temperature, unit, min, max, onChange } = this.props;
		const getBgColor = () => {
			if (temperature >= 10) {
				return 'rgb(208, 188, 42)';
			}
			if (temperature < 10) {
				return 'rgb(58, 196, 255)';
			}
		};

		return (
			<div
				className='box col-md-3 col-6'
				style={{ backgroundColor: getBgColor() }}>
				<Icon name='wb_sunny' color='yellow' />
				<h5 className='mb-3'>
					{temperature}
					{unit}
				</h5>
				<Slider min={min} max={max} value={temperature} onChange={onChange} />
			</div>
		);
	}
}

export default Temperature;
