const FiftyPercent = ({ handleClick, fiftyPercent }) => {
	return (
		<div className='fiftyPercent'>
			<button
				type='button'
				className='button fifty'
				onClick={handleClick}>
				{fiftyPercent}
			</button>
		</div>
	);
};

export default FiftyPercent;
