import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />  
      <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector ({//({ cart: { cartItems } }) => ({
  itemCount: selectCartItemsCount
   //cartIt ems.red uce(
    //(accumalatedQuantity, cartItem) => 
    //accumalatedQuantity + cartItem.quantity,
     //0 
     // ) 
});
 
export default connect( 
  mapStateToProps,
  mapDispatchToProps) 
  (CartIcon);