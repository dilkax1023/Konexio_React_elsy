import React from 'react';

class Icon extends React.Component {
	render() {
		return (
			<span
				style={{ fontSize: '100px', color: `${this.props.color}` }}
				className='material-icons'>
				{this.props.name}
			</span>
		);
	}
}

export default Icon;
