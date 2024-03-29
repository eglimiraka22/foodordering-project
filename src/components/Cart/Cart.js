import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
const Cart = (props) => {
	const cartCtx = useContext(CartContext);
	console.log(cartCtx);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

	const hasItems = cartCtx.items.length > 0;
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};
	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item ,amount:1});
		console.log(item);
	};

	const cartItems = (
		<ul className={classes['cart-items']}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
	return (
		<Modal onHide={props.onHideCart}>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onHideCart}>
					Close
				</button>
				{hasItems && <button className={classes.button}>Order</button>}
			</div>
		</Modal>
	);
};

export default Cart;

//Doesnt dublicae same item

// const cartItems = (
// 	<ul className={classes['cart-items']}>
// 	  {cartCtx.items.map((item, index) => {
// 		const sameNameItems = cartCtx.items.filter(
// 		  (cartItem) => cartItem.name === item.name
// 		);
// 		if (index === cartCtx.items.findIndex((el) => el.name === item.name)) {
// 		  return (
// 			<li key={item.id}>
// 			  {item.name}
// 			  {sameNameItems.length > 1 && (
// 				<span >
// 				  : x{sameNameItems.length}
// 				</span>
// 			  )}
// 			</li>
// 		  );
// 		} else {
// 		  return null;
// 		}
// 	  })}
// 	</ul>
//   );
