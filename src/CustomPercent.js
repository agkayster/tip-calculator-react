const CustomPercent = ({ percentValue, handleChange }) => {
	return (
		<input
			type='text'
			value={percentValue}
			onChange={handleChange}
			placeholder='Custom'
			className='input custom'
		/>
	);
};

export default CustomPercent;
