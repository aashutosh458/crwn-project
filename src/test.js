import firebase from 'firebase/app';
import 'firebase/firestore';


 const firestore = firebase.firestore();

 firestore.collection('users').doc('NSi7jpGBq4IO7fCzbO7W').collection('cartitems').doc('uSPjwLKUKffJyj1whfOG')
 firestore.doc('/users/NSi7jpGBq4IO7fCzbO7W/cartitems/uSPjwLKUKffJyj1whfOG');
 firestore.collection('/users/NSi7jpGBq4IO7fCzbO7W/cartitems');