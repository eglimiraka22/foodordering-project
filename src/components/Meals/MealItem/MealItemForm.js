import React, { useRef, useState } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';
const MealItemForm = (props) => {
	const amountInputRef = useRef();
	const [amountIsValid, setAmountIsValid] = useState(true);

	const submitHandler = (event) => {
		event.preventDefault();
		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (
			enteredAmount.trim().length === 0 ||
			enteredAmount < 1 ||
			enteredAmount > 5
		) {
			setAmountIsValid(false);

			return;
		}
    props.onAddToCart(enteredAmountNumber);
	};
	return (
		<form action='' className={styles.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label='Amount'
				input={{
					id: 'amount',
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
			{!amountIsValid && <p>Please enter valid amount (1-5)</p>}
		</form>
	);
};

export default MealItemForm;
