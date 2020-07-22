import React from 'react';

class ChangeSteps extends React.Component {
	state = { currSteps: this.props.steps };
	onClickPlus = () => {
		this.setState({ currSteps: this.state.currSteps + 1000 });
		if (this.state.currSteps < 50000) {
			this.props.onClickModify(this.state.currSteps + 1000);
		}
	};

	onClickMinus = () => {
		this.setState({ currSteps: this.state.currSteps - 1000 });
		if (this.state.currSteps > 0) {
			this.props.onClickModify(this.state.currSteps - 1000);
		}
	};

	render() {
		return (
			<div className='float-right'>
				<button
					type='button'
					className='btn btn-secondary px-3 mx-1'
					onClick={this.onClickPlus}>
					+
				</button>
				<button
					type='button'
					className='btn btn-secondary px-3 mx-1'
					onClick={this.onClickMinus}>
					-
				</button>
			</div>
		);
	}
}

export default ChangeSteps;
