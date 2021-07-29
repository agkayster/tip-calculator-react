const TwentyFivePercent = ({ handleClick, twentyFivePercent }) => {
	return (
		<div className='twentyfivePercent'>
			<button
				type='button'
				className='button twentyFive'
				onClick={handleClick}>
				{twentyFivePercent}
			</button>
		</div>
	);
};

export default TwentyFivePercent;
