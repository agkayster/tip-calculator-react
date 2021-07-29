const FifteenPercent = ({ handleClick, fifteenPercent }) => {
	return (
		<div className='fifteenPercent'>
			<button
				type='button'
				className='button fifteen'
				onClick={handleClick}>
				{fifteenPercent}
			</button>
		</div>
	);
};

export default FifteenPercent;
