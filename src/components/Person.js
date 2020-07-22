import React from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider';
import ChangeSteps from './ChangeSteps';

class Person extends React.Component {
	onClickModify = (val) => {
		this.props.onChange(val);
	};

	render() {
		const { min, max, onChange, steps, person } = this.props;

		return (
			<div className='box col-md-3 col-6'>
				<ChangeSteps steps={steps} onClickModify={this.onClickModify} />
				<Icon name='directions_walk' color={person} />
				<h5 className='mb-3'>{steps}</h5>
				<Slider min={min} max={max} value={steps} onChange={onChange} />
			</div>
		);
	}
}

export default Person;
