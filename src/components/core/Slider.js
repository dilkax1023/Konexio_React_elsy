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

	onSliderChange = (value) => {
		this.setState({
			value,
		});
		this.props.onChange(this.state.value);
	};

	render() {
		return (
			<div>
				<SliderWithTooltip
					min={this.props.min}
					max={this.props.max}
					value={this.props.value}
					onChange={this.onSliderChange}
				/>
			</div>
		);
	}
}

export default Slider;
