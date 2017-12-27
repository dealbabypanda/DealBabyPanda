import * as firebase from 'firebase';

const firebaseConfig = require('C:\dealbabypanda\firebase-config.json');
console.log('Config');
console.log(firebaseConfig);

// const firebaseConfig = {
//   apiKey: "AIzaSyAesECIinxJlfnFOFRUyFwK6bGK1SLDbtQ",
//   authDomain: "deal-baby-panda.firebaseapp.com"
// };

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;