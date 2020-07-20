import React from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Water from './components/Water';
import Temperature from './components/Temperature';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;
// const genre = {
// 	man: 'blue',
// 	women: 'pink',
// };

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			water: 1.5,
			heart: 120,
			temperature: -10,
			steps: 3000,
			person: 'blue',
			sexe: 'Man',
		};
	}

	onHeartChange = (val) => {
		this.setState({ heart: val });
		if (val > 120) {
			this.calculateWater(val, 0.0008, 'heart');
		}
	};

	calculateWater = (value, amount, str) => {
		if (str === 'heart') {
			if (value - this.state.heart > 0) {
				this.setState({ water: this.state.water + amount });
			}
			if (value - this.state.heart < 0) {
				this.setState({ water: this.state.water - amount });
			}
		}

		if (str === 'temperature') {
			if (value - this.state.temperature > 0) {
				this.setState({ water: this.state.water + amount });
			}
			if (value - this.state.temperature < 0) {
				this.setState({ water: this.state.water - amount });
			}
		}

		if (str === 'steps') {
			if (value - this.state.steps > 0) {
				this.setState({ water: this.state.water + amount });
			}
			if (value - this.state.steps < 0) {
				this.setState({ water: this.state.water - amount });
			}
		}
	};

	onTempChange = (val) => {
		this.setState({ temperature: val });
		if (val > 20) {
			this.calculateWater(val, 0.02, 'temperature');
		}
	};

	onStepChange = (val) => {
		this.setState({ steps: val });
		if (val > 10000) {
			this.calculateWater(val, 0.002, 'steps');
		}
	};

	onClickChange = () => {
		if (this.state.person === 'blue') {
			this.setState({ person: 'red', sexe: 'Women' });
		}
		if (this.state.person === 'red') {
			this.setState({ person: 'blue', sexe: 'Man' });
		}
	};

	render() {
		return (
			<div className='container'>
				<input
					type='button'
					value={this.state.sexe}
					className='btn btn-primary px-4'
					onClick={this.onClickChange}
				/>

				<div className='row'>
					<Water water={this.state.water.toFixed(2)} unit='L' />
					<Person
						min={MIN_STEPS}
						steps={this.state.steps}
						max={MAX_STEPS}
						onChange={this.onStepChange}
						person={this.state.person}
					/>
					<HeartRate
						min={MIN_HEART}
						heart={this.state.heart}
						max={MAX_HEART}
						onChange={this.onHeartChange}
						unit='BPM'
					/>
					<Temperature
						min={MIN_TEMPERATURE}
						temperature={this.state.temperature}
						max={MAX_TEMPERATURE}
						onChange={this.onTempChange}
						unit='&deg;C'
					/>
				</div>
			</div>
		);
	}
}

export default App;
