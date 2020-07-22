import React from 'react';

class Icon extends React.Component {
	render() {
		const { color, name } = this.props;

		return (
			<span
				style={{ fontSize: '100px', color: color }}
				className='material-icons'>
				{name}
			</span>
		);
	}
}

export default Icon;
