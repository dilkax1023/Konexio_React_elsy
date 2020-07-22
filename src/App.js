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
		const water = this.calculateWater();

		this.setState({ heart: val, water });
	};

	onTempChange = (val) => {
		const water = this.calculateWater();
		this.setState({ temperature: val, water });
		if (this.state.temperature > 0) {
		}
	};

	onStepChange = (val) => {
		const water = this.calculateWater();

		this.setState({ steps: val, water });
	};

	onClickChange = () => {
		if (this.state.person === 'blue') {
			this.setState({ person: 'red', sexe: 'Women' });
		}
		if (this.state.person === 'red') {
			this.setState({ person: 'blue', sexe: 'Man' });
		}
	};

	calculateWater = () => {
		const { steps, heart, temperature } = this.state;

		let needWaterBySteps = 0;
		let needWaterByBat = 0;
		let needWaterByTem = 0;
		if (steps > 10000) {
			needWaterBySteps = (steps - 10000) * 0.00002;
		}
		if (heart > 120) {
			needWaterByBat = (heart - 120) * 0.0008;
		}
		if (temperature > 20) {
			needWaterByTem = (temperature - 20) * 0.02;
		}

		return Number(
			1.5 + needWaterBySteps + needWaterByBat + needWaterByTem
		).toFixed(2);
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
					<Water water={this.state.water} unit='L' />
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
