import CartIcon from '../Cart/CartIcon'
import { useContext ,useEffect,useState} from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
const [btnIsHighlighted,setBtnIsHighlighted] =useState(false)
const cartctx = useContext(CartContext)
const {items} = cartctx

const numberOfCartItems =items.reduce((CurrentNumber,item)=>{
	return CurrentNumber+ item.amount;
},0)

const btnClasses =` ${classes.button} ${btnIsHighlighted ?classes.bump : ''}`
useEffect(()=>{
	if(items.length===0){
		return;
	}
	console.log(items)
	setBtnIsHighlighted(true)

	const timer= setTimeout(()=>{
		setBtnIsHighlighted(false)
	},300)


	return () =>{
		clearTimeout(timer)
	}
},[items])

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
                <CartIcon />
            </span>
			<span className={classes.cartTxt} >Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
