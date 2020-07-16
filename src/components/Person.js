import React from 'react';
import Icon from '../components/core/Icon';

class Person extends React.Component {
	render() {
		return (
			<div className='box col-md-3 col-6'>
				<Icon name='directions_walk' />
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
