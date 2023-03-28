import  React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOutStart } from '../../redux/user/user.sagas';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import './header.styles.scss';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden, signOutStart }) => {
    console.log(currentUser)
    return(
    <HeaderContainer>
    <LogoContainer to ='/'>
        <Logo className='logo' />
        </LogoContainer>
       <OptionsContainer>
        <OptionLink to='/shop'>
            SHOP
        </OptionLink>
        <OptionLink to='/shop'> 
            CONTACT
        </OptionLink>
        {currentUser ? (
            <optionDiv as='div' onClick={signOutStart}>  
            SIGN OUT 
             </optionDiv>
            ) : (  
            <OptionLink to='/signin'>
                 SIGN IN 
            </OptionLink> 
            )}


            <CartIcon />
         </OptionsContainer>
         
           { hidden ? null : <CartDropdown />}
         
      
           </HeaderContainer>
)};
const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden    

});

const mapDispatchToProps= dispatch => ({
    signOutStart: () => dispatch(signOutStart())


});


export default connect(mapStateToProps,mapDispatchToProps)(Header);