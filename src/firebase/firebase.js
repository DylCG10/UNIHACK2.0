import app from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyDCpyump31MvSM5B_eM7nm4jNW_zmHdOoM",
    authDomain: "unihack-1614967346330.firebaseapp.com",
    databaseURL: "https://unihack-1614967346330-default-rtdb.firebaseio.com",
    projectId: "unihack-1614967346330",
    storageBucket: "unihack-1614967346330.appspot.com",
    messagingSenderId: "605007124384",
    appId: "1:605007124384:web:48b6c4c1dc793304e336c5"
};
  
class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
    }
  }
   
  export default Firebase;