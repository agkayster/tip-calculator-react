import './App.css';
import React, { useState } from 'react';

const App = () => {
	const [fivePercent, setfivePercent] = useState('5%');
	const [tenPercent, settenPercent] = useState('10%');
	const [fifteenPercent, setfifteenPercent] = useState('15%');
	const [twentyFivePercent, settwentyFivePercent] = useState('25%');
	const [fiftyPercent, setfiftyPercent] = useState('50%');
	const [customPercent, setcustomPercent] = useState('');
	const [billInput, setbillInput] = useState('');
	const [numberPeople, setnumberPeople] = useState('');
	const [tipAmount, settipAmount] = useState('0');
	const [totalAmountPerson, settotalAmountPerson] = useState('0');
	const [zeroInput, setzeroInput] = useState('');

	// let numberPeopleStyle = {
	// 	borderColor: '#dbdbdb',
	// };

	const handleBillInputChange = (e) => {
		setbillInput(e.target.value);
		console.log('bill input', billInput);
	};

	const handleCustomChange = (e) => {
		setcustomPercent(e.target.value);
		console.log('custom percent', customPercent);
	};

	const handleNumberPeopleChange = (e) => {
		setnumberPeople(e.target.value);
		const eValue = e.target.value;
		console.log('e value', eValue);

		if (eValue === '0') {
			setzeroInput('Do not put zero!');
		} else {
			setzeroInput('');
		}
	};

	const handleFivePercentClick = () => {
		const getFivePercent = 5 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
		} else {
			settipAmount(
				((getFivePercent * billInput) / numberPeople).toFixed(2)
			);
		}
	};

	const handleTenPercentClick = () => {
		const getTenPercent = 10 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
		} else {
			settipAmount(
				((getTenPercent * billInput) / numberPeople).toFixed(2)
			);
		}
	};

	const handleFifteenPercentClick = () => {
		const getFifteenPercent = 15 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
		} else {
			settipAmount(
				((getFifteenPercent * billInput) / numberPeople).toFixed(2)
			);
		}
	};

	const handleTwentyFivePercentClick = () => {
		const getTwentyFivePercent = 25 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
		} else {
			settipAmount(
				((getTwentyFivePercent * billInput) / numberPeople).toFixed(2)
			);
		}
	};

	const handleFiftyPercentClick = () => {
		const getFiftyPercent = 50 / 100;
		if (numberPeople === '0') {
			settipAmount('0');
		} else {
			settipAmount(
				((getFiftyPercent * billInput) / numberPeople).toFixed(2)
			);
		}
	};

	const handleReset = () => {
		settipAmount('0');
		setbillInput('');
		setnumberPeople('');
	};

	// if (numberPeople === '0') {
	// 	numberPeopleStyle.borderColor = 'red';
	// } else {
	// 	numberPeopleStyle.borderColor = '#dbdbdb';
	// }

	console.log('tip amount', tipAmount);
	console.log('zero input', zeroInput);

	return (
		<div className='allContainer'>
			<h1 className='splitter'>
				SPLI
				<br />
				TTER
			</h1>
			<div className='container'>
				<div className='billPeople'>
					<div className='inputBill'>
						<p className='bill'>Bill</p>
						<input
							className='input billInput'
							id='billInput'
							type='text'
							placeholder='$'
							value={billInput}
							onChange={handleBillInputChange}
						/>
					</div>
					<div className='tipCalc'>
						<p className='tip'>Select Tip %</p>
						<div className='buttons'>
							<button
								className='button five'
								type='button'
								onClick={handleFivePercentClick}>
								{fivePercent}
							</button>
							<button
								className='button ten'
								type='button'
								onClick={handleTenPercentClick}>
								{tenPercent}
							</button>
							<button
								className='button fifteen'
								type='button'
								onClick={handleFifteenPercentClick}>
								{fifteenPercent}
							</button>
							<button
								className='button twentyFive'
								type='button'
								onClick={handleTwentyFivePercentClick}>
								{twentyFivePercent}
							</button>
							<button
								className='button fifty'
								type='button'
								onClick={handleFiftyPercentClick}>
								{fiftyPercent}
							</button>
							<input
								type='text'
								className='input custom'
								placeholder='Custom'
								value={customPercent}
								onChange={handleCustomChange}
							/>
						</div>
					</div>
					<div className='peopleCalc'>
						<p className='people'>
							Number of People
							<span className='zeroInput'>{zeroInput}</span>
						</p>
						<div className='inputPlace'>
							<input
								className='input peopN'
								type='text'
								value={numberPeople}
								onChange={handleNumberPeopleChange}
								style={{
									borderColor:
										numberPeople === '0'
											? 'red'
											: '#dbdbdb',
								}}
							/>
							<i className='fa fa-user' aria-hidden='true'></i>
						</div>
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
