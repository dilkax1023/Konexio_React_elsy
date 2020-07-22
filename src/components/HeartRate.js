import React from 'react';
import Icon from '../components/core/Icon';
import Slider from '../components/core/Slider';
import { motion } from 'framer-motion';

class HeartRate extends React.Component {
	render() {
		const { min, max, heart, onChange, unit } = this.props;

		return (
			<div className='box col-md-3 col-6'>
				<motion.div
					animate={{
						scale: [1, 1.25, 1.25, 1, 1],
					}}
					transition={{
						duration: 1,
						ease: 'easeInOut',
						times: [0, 0.2, 0.5, 0.8, 1],
						loop: Infinity,
						repeatDelay: 1,
					}}>
					<Icon name='favorite' color='red' />
				</motion.div>
				<h5 className='mb-3'>
					{heart}
					{unit}
				</h5>
				<Slider min={min} max={max} value={heart} onChange={onChange} />
			</div>
		);
	}
}

export default HeartRate;
