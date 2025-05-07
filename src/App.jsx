import { useState, useRef } from 'react';

export default function App() {
	const [inputVal, setInputVal] = useState('');
	const [isValid, setIsValid] = useState(false);

	const inputRef = useRef(null);

	const handleInputVal = (e) => {
		e.preventDefault();

		const inputValue = inputRef.current.value;

		setInputVal(inputValue);

		if (inputValue.trim() !== '') {
			console.log('Input value is: ', inputValue);
			setIsValid(true);
			//document.querySelector('p').innerHTML = inputValue;
		} else {
			console.log('Enter a valid input');
			setIsValid(false);
		}
	};

	return (
		<form
			className='container'
			onSubmit={handleInputVal}
		>
			<input
				type='text'
				ref={inputRef}
			/>
			<button
				type='submit'
				className={!isValid ? 'disabled' : 'normal'}
			>
				Print value
			</button>
			<p>{inputVal}</p>
		</form>
	);
}
