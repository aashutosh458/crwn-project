import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    
        apiKey: 'AIzaSyBboof5GXrip3LzKkkmfZy6ida2GZLCfuI',
        authDomain: 'crwn-db-40395.firebaseapp.com',
        projectId: 'crwn-db-40395',
        storageBucket: 'crwn-db-40395.appspot.com',
        messagingSenderId: '498779739579',
        appId: '1:498779739579:web:42a323c2ce587135ace09e',
        measurementId: 'G-LJBJP78ZD1'
      };

      export const createUserProfileDocument = async(userAuth, additionalData) => {

      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`); 
     

      const snapShot = await userRef.get();

     console.log(snapShot);
    //firestore.doc('users/128fdashadu')
    if(!snapShot.exists)

    {
     const { displayName, email } = userAuth;
     const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }
catch(error) {
  console.log('error creating user', error.message);

}    }
 
return userRef;

    };


 
      firebase.initializeApp(config);

      export const auth = firebase.auth();
      export const firestore = firebase.firestore();

      const provider = new firebase.auth.GoogleAuthProvider();

      provider.setCustomParameters({prompt: 'select_account' });
      export const signInWithGoogle =() => auth.signInWithPopup(provider);

      export default firebase;