import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./components/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession, CheckUserSession } from "./redux/user/user.actions";
import { toHaveDisplayValue } from "@testing-library/jest-dom/dist/matchers";

class App extends React.Component {
  unsubscribeFromAuth = null;

  // componentDidMount() {
  //   const { checkUserSession } = this.props;
  //   checkUserSession();
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <Header hidden={true} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  CheckUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
