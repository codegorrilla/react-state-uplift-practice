import { useState } from 'react';

export default function Form2() {
	const [fldValue, setFldValue] = useState('');
	const [validVal, setValidVal] = useState(false);

	const handleFldValue = (e) => {
		e.preventDefault();
		let inpVal = e.target.value;
		setFldValue(inpVal);
	};

	const printFldValue = (e) => {
		e.preventDefault();

		if (fldValue.trim() !== '') {
			document.querySelector('.msg').innerHTML = fldValue;
			setValidVal(true);
		} else {
			setValidVal(false);
			alert('Input can not be blank');
		}
		setFldValue('');
	};

	return (
		<form
			className='container'
			onSubmit={printFldValue}
		>
			<input
				type='text'
				value={fldValue}
				onChange={handleFldValue}
			/>
			<button type='submit'>Another value</button>
			<p className='msg'></p>
		</form>
	);
}
