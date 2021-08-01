import './App.css';
import React, { useState } from 'react';
import FivePercent from './FivePercent';
import TenPercent from './TenPercent';
import FifteenPercent from './FifteenPercent';
import TwentyFivePercent from './TwentyFivePercent';
import FiftyPercent from './FiftyPercent';
import CustomPercent from './CustomPercent';
import logoPath from './images/logo.svg';
import dollarPath from './images/icon-dollar.svg';
import personPath from './images/icon-person.svg';

const App = () => {
	const [fivePercent] = useState('5%');
	const [tenPercent] = useState('10%');
	const [fifteenPercent] = useState('15%');
	const [twentyFivePercent] = useState('25%');
	const [fiftyPercent] = useState('50%');
	const [customPercent, setcustomPercent] = useState('');
	const [billInput, setbillInput] = useState('');
	const [numberPeople, setnumberPeople] = useState('');
	const [tipAmount, settipAmount] = useState('0');
	const [totalAmountPerson, settotalAmountPerson] = useState('0');
	const [zeroInput, setzeroInput] = useState('');

	const handleBillInputChange = (e) => {
		setbillInput(e.target.value);
	};

	const handleCustomChange = (e) => {
		setcustomPercent(e.target.value);
		const custVal = e.target.value;
		const getCustomPercent = custVal / 100;
		if (numberPeople === '0') {
			settipAmount('0');
			settotalAmountPerson('0');
		} else {
			settipAmount(
				((getCustomPercent * billInput) / numberPeople).toFixed(2)
			);
			settotalAmountPerson(
				(
					((getCustomPercent * billInput) / numberPeople) *
					7.68
				).toFixed(2)
			);
		}
	};

	const handleNumberPeopleChange = (e) => {
		setnumberPeople(e.target.value);
		const eValue = e.target.value;

		if (eValue === '0') {
			setzeroInput("Can't be zero!");
		} else {
			setzeroInput('');
		}
	};

	const handleFivePercentClick = () => {
		const getFivePercent = 5 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
			settotalAmountPerson('0');
		} else {
			settipAmount(
				((getFivePercent * billInput) / numberPeople).toFixed(2)
			);
			settotalAmountPerson(
				(((getFivePercent * billInput) / numberPeople) * 7.68).toFixed(
					2
				)
			);
		}
	};

	const handleTenPercentClick = () => {
		const getTenPercent = 10 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
			settotalAmountPerson('0');
		} else {
			settipAmount(
				((getTenPercent * billInput) / numberPeople).toFixed(2)
			);
			settotalAmountPerson(
				(((getTenPercent * billInput) / numberPeople) * 7.68).toFixed(2)
			);
		}
	};

	const handleFifteenPercentClick = () => {
		const getFifteenPercent = 15 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
			settotalAmountPerson('0');
		} else {
			settipAmount(
				((getFifteenPercent * billInput) / numberPeople).toFixed(2)
			);
			settotalAmountPerson(
				(
					((getFifteenPercent * billInput) / numberPeople) *
					7.68
				).toFixed(2)
			);
		}
	};

	const handleTwentyFivePercentClick = () => {
		const getTwentyFivePercent = 25 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
			settotalAmountPerson('0');
		} else {
			settipAmount(
				((getTwentyFivePercent * billInput) / numberPeople).toFixed(2)
			);
			settotalAmountPerson(
				(
					((getTwentyFivePercent * billInput) / numberPeople) *
					7.68
				).toFixed(2)
			);
		}
	};

	const handleFiftyPercentClick = () => {
		const getFiftyPercent = 50 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
			settotalAmountPerson('0');
		} else {
			settipAmount(
				((getFiftyPercent * billInput) / numberPeople).toFixed(2)
			);
			settotalAmountPerson(
				(((getFiftyPercent * billInput) / numberPeople) * 7.68).toFixed(
					2
				)
			);
		}
	};

	const handleReset = () => {
		settipAmount('0');
		settotalAmountPerson('0');
		setbillInput('');
		setnumberPeople('');
		setcustomPercent('');
		setzeroInput('');
	};

	console.log('tip amount', tipAmount);
	console.log('zero input', zeroInput);
	console.log('total amount', totalAmountPerson);

	return (
		<div className='allContainer'>
			<header>
				<div className='header-img'>
					<img src={logoPath} alt='logo' className='img-logo' />
				</div>
			</header>
			<div className='container'>
				<div className='billPeople'>
					<div className='inputBill'>
						<label htmlFor='bill' className='bill'>
							Bill
						</label>
						<input
							className='input billInput'
							id='billInput'
							type='number'
							required
							name='bill'
							value={billInput}
							onChange={handleBillInputChange}
						/>
						<img
							src={dollarPath}
							alt='dollar icon'
							className='dollar-icon'
						/>
					</div>
					<div className='tipCalc'>
						<p className='tip'>Select Tip %</p>
						<div className='buttons'>
							<FivePercent
								handleClick={handleFivePercentClick}
								fivePercent={fivePercent}
							/>
							<TenPercent
								handleClick={handleTenPercentClick}
								tenPercent={tenPercent}
							/>
							<FifteenPercent
								handleClick={handleFifteenPercentClick}
								fifteenPercent={fifteenPercent}
							/>
							<TwentyFivePercent
								handleClick={handleTwentyFivePercentClick}
								twentyFivePercent={twentyFivePercent}
							/>
							<FiftyPercent
								handleClick={handleFiftyPercentClick}
								fiftyPercent={fiftyPercent}
							/>
							<CustomPercent
								percentValue={customPercent}
								handleChange={handleCustomChange}
							/>
						</div>
					</div>
					<div className='peopleCalc'>
						<p htmlFor='num-of-people' className='people'>
							Number of People
							<span
								className='zeroInput'
								style={{
									color:
										numberPeople === '0' ? 'red' : 'black',
								}}>
								{zeroInput}
							</span>
						</p>

						<input
							className='input peopN'
							type='number'
							name='people'
							required
							value={numberPeople}
							onChange={handleNumberPeopleChange}
							style={{
								borderColor:
									numberPeople === '0' ? 'red' : '#dbdbdb',
							}}
						/>
						<img
							src={personPath}
							alt='persons icon'
							className='persons'
						/>
					</div>
				</div>
				<div className='tipTotal'>
					<div className='tipAmt'>
						<p className='tipperAmt'>
							Tip Amount <br />
							<span className='person'>/ person</span>
						</p>
						<p className='tipFig' id='tipFig'>
							${tipAmount}
						</p>
					</div>
					<div className='totPerson'>
						<p className='totalPerson'>
							Total <br />
							<span className='person'>/ person</span>
						</p>
						<p className='totFig' id='totFig'>
							${totalAmountPerson}
						</p>
					</div>
					<button
						className='button reset'
						type='reset'
						onClick={handleReset}>
						RESET
					</button>
				</div>
			</div>
			<div className='attribution'>
				{/* Challenge by
				<a
					href='https://www.frontendmentor.io?ref=challenge'
					target='_blank'
					rel='noreferrer'>
					Frontend Mentor
				</a>
				. Coded by <a href='#'>Ejike Chiboka</a>. */}
			</div>
		</div>
	);
};

export default App;
