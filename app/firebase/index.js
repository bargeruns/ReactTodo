import firebase from 'firebase';

try {
  const config = {
    apiKey: "AIzaSyAkvnhP2kPeEH8qMeIpVXRN_ebearJqoJk",
    authDomain: "reacttodos-56a9c.firebaseapp.com",
    databaseURL: "https://reacttodos-56a9c.firebaseio.com",
    storageBucket: "reacttodos-56a9c.appspot.com",
    messagingSenderId: "271965985199"
  };
  firebase.initializeApp(config);
} catch (e) {

}

export const firebaseRef = firebase.database().ref();

export default firebase;