const FivePercent = ({ handleClick, fivePercent }) => {
	return (
		<div className='fivePercent'>
			<button type='button' className='button five' onClick={handleClick}>
				{fivePercent}
			</button>
		</div>
	);
};

export default FivePercent;
