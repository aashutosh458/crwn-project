import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import CollectionPage from "../../pages/collection/collection.component";
import collectionsOverview from "../collections-overview/collections-overview.component";
import CollectionPreview from "../collection-preview/collection-preview.component";
import shopReducer from "../../redux/shop/shop.reducer";
import { selectCollections } from "../../redux/shop/shop.selectors"; 
import { createStructuredSelector } from "reselect";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner  from "../with-spinner/with-spinner.component";

import { Connect } from "react-redux"; 

const CollectionsOverviewWithSpinner = WithSpinner(collectionsOverview);
const CollectionPageWithSpinner =  WithSpinner(CollectionPage);
class ShopPage extends React.Component{
  state = {
    loading: true
  };
  
  unsubscribeFromSnapshort = null;

  componentDidMount() {
    const {updateCollections} = this.props;
    const collectionRef = firestore.collection('collections');

    // fetch('https://console.firebase.google.com/project/crwn-db-40395/database/crwn-db-40395-default-rtdb/data/~2F+')
    //     .then(response => response.json())
    //     .then(collections => console.log(collections));
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
       updateCollections(collectionsMap);
       this.setState({loading: false})
    });
  
  }
  
  render() {
    const {match} = this.props;
    const {loading} = this.state;
    return ( 
    <div className='shop-page'>
      <Route exact path={`${match.path}`} render={( props ) => <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
      <Route path={`${match.path}/:collectionId`} 
      render={(props) =>( <CollectionPageWithSpinner isLoading={loading} {...props}/>
      )}
       />
    </div> 
    );
  }
}


const mapDispatchToProps = dispatch => ({
updateCollections: collectionsMap =>
dispatch(updateCollections(collectionsMap))

});
export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
