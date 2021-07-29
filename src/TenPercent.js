const TenPercent = ({ handleClick, tenPercent }) => {
	return (
		<div className='tenPercent'>
			<button type='button' className='button ten' onClick={handleClick}>
				{tenPercent}
			</button>
		</div>
	);
};

export default TenPercent;
