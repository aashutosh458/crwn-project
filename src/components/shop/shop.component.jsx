import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionPage from "../../pages/collection/collection.component";
import collectionsOverview from "../collections-overview/collections-overview.component";
import CollectionPreview from "../collection-preview/collection-preview.component";
import shopReducer from "../../redux/shop/shop.reducer";
import { selectCollections } from "../../redux/shop/shop.selectors"; 
import { createStructuredSelector } from "reselect";

const ShopPage = ({ match }) => {
  return(
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={collectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div> 
  )
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);
