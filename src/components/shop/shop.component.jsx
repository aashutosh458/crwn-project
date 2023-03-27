import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import CollectionPageContainer from "../../pages/collection/collection.container";
import CollectionOverviewContainer from "../collections-overview/collections-overview.container";
// import CollectionPreview from "../collection-preview/collection-preview.component";
import shopReducer from "../../redux/shop/shop.reducer";
import { selectCollections } from "../../redux/shop/shop.selectors"; 

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import { Connect } from "react-redux"; 



class ShopPage extends React.Component{
 
  

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }
  
  render() {
    const {match} = this.props;
    
    return (  
    <div className='shop-page'>
      <Route exact path={`${match.path}`} 
      component={CollectionOverviewContainer} />
      <Route path={`${match.path}/:collectionId`} 
      component={CollectionPageContainer}
       />
      
    </div> 
    );
  }
}

 
const mapDispatchToProps = dispatch => ({
fetchCollectionsStart: () => dispatch(fetchCollectionsStart())

});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
