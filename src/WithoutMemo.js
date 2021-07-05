// without memo hook
// with this code you can see that the "squareNum" will run even though the number is the same,
// unwanted re-rendering
import React, { useState } from 'react';

const WithoutMemo = () => {
	const [number, setNumber] = useState(0);
	const squaredNum = squareNum(number);
	const [counter, setCounter] = useState(0);

	// Change the state to the input
	const onChangeHandler = (e) => {
		setNumber(e.target.value);
	};

	// Increases the counter by 1
	const counterHandler = () => {
		setCounter(counter + 1);
	};
	return (
		<div className="App">
			<input type="number" placeholder="Enter a number" value={number} onChange={onChangeHandler}></input>

			<div>OUTPUT: {squaredNum}</div>
			<button onClick={counterHandler}>Counter ++</button>
			<div>Counter : {counter}</div>
		</div>
	);
};

// function to square the value
function squareNum(number) {
	console.log('Squaring will be done!');
	return Math.pow(number, 2);
}

export default WithoutMemo;
