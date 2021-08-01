const CustomPercent = ({ percentValue, handleChange }) => {
	return (
		<input
			type='number'
			value={percentValue}
			onChange={handleChange}
			placeholder='Custom'
			className='input custom'
		/>
	);
};

export default CustomPercent;
