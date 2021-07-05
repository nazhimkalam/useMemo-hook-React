// with memo hook
// now you can see that the "squareNum" doesn't get re-rendered when ever the counter button is clicked while the number from the input field also doesn't change
import React, { useMemo, useState } from 'react';

function WithMemo() {
	const [number, setNumber] = useState(0);
	// Using useMemo
	const squaredNum = useMemo(() => {
		return squareNum(number);
	}, [number]);
	const [counter, setCounter] = useState(0);

	// Change the state to the input
	const onChangeHandler = (e) => {
		setNumber(e.target.value);
	};

	// Increases the counter by 1
	const counterHander = () => {
		setCounter(counter + 1);
	};
	return (
		<div className="App">
			<input type="number" placeholder="Enter a number" value={number} onChange={onChangeHandler}></input>

			<div>OUTPUT: {squaredNum}</div>
			<button onClick={counterHander}>Counter ++</button>
			<div>Counter : {counter}</div>
		</div>
	);
}

// function to square the value
function squareNum(number) {
	console.log('Squaring will be done!');
	return Math.pow(number, 2);
}

export default WithMemo;
