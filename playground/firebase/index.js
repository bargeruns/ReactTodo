import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAkvnhP2kPeEH8qMeIpVXRN_ebearJqoJk",
  authDomain: "reacttodos-56a9c.firebaseapp.com",
  databaseURL: "https://reacttodos-56a9c.firebaseio.com",
  storageBucket: "reacttodos-56a9c.appspot.com",
  messagingSenderId: "271965985199"
};
firebase.initializeApp(config);

const firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'ReactTodos',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Sean',
    age: 29
  }
});

const todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child_added: ', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('child_removed', snapshot.key, snapshot.val());
});

todosRef.push({text: 'Add a todos prop'});
todosRef.push({text: 'Add a second todo'});

todosRef.push();