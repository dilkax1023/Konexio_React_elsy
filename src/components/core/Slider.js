import React from 'react';
import RCSlider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(RCSlider);

class Slider extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value,
		};
	}

	render() {
		const { min, max, value, onChange } = this.props;
		return (
			<div>
				<SliderWithTooltip
					min={min}
					max={max}
					value={value}
					onChange={onChange}
				/>
			</div>
		);
	}
}

export default Slider;
