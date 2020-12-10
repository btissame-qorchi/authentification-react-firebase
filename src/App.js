import React,{useState, useEffect} from 'react';
import firebase from './config/ConfigFirebase';
import Success from './components/Success';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

const App = () => {
  const [isSignedIn, setSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    //connecter user
    firebase.auth().onAuthStateChanged((user)=>{
      setSignedIn(!!user);
      console.log(user);
    })
  
  }, [])
  return (
    <div style={{textAlign:"center"}}>
      {
        isSignedIn ?
         (<Success/>) 
         : (
          <div className="login">
            <h1>Connectez-vous !!</h1>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
          </div>
         )
      }
    </div>
  );
}; 

export default App;