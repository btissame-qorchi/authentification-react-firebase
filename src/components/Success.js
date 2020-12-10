import React from 'react';
import firebase from '../config/ConfigFirebase';

const Success = () => {
    return (
        <div>
           <h1>Bienvenue {firebase.auth().currentUser.displayName}</h1> 
           <button onClick={()=>firebase.auth().signOut()}>Se déconnecter</button>
        </div>
    );
};

export default Success;