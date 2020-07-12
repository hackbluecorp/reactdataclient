//import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'
import * as firebase from 'firebase/app';

const settings = {};
const config ={
    apiKey: "AIzaSyDz0DxYNAc_Z6Uw7fzN2l1WGQiLg_xb_2Y",
    authDomain: "reactdataclient.firebaseapp.com",
    databaseURL: "https://reactdataclient.firebaseio.com",
    projectId: "reactdataclient",
    storageBucket: "reactdataclient.appspot.com",
    messagingSenderId: "322112369161",
    appId: "1:322112369161:web:ba33dc6a36564115a1fed8",
    measurementId: "G-R96QWX2L4J"
};

/*
const config = {
    apiKey: "AIzaSyBvEExkkpTBf3VYfL7PVScolkMQtP_3q5E",
    authDomain: "reactagenda-93ffc.firebaseapp.com",
    databaseURL: "https://reactagenda-93ffc.firebaseio.com",
    projectId: "reactagenda-93ffc",
    storageBucket: "reactagenda-93ffc.appspot.com",
    messagingSenderId: "753510908364",
    appId: "1:753510908364:web:5396f044547c92efdf9d69"
};*/



firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;

/*import firebase from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBvEExkkpTBf3VYfL7PVScolkMQtP_3q5E",
    authDomain: "reactagenda-93ffc.firebaseapp.com",
    databaseURL: "https://reactagenda-93ffc.firebaseio.com",
    projectId: "reactagenda-93ffc",
    storageBucket: "reactagenda-93ffc.appspot.com",
    messagingSenderId: "753510908364",
    appId: "1:753510908364:web:5396f044547c92efdf9d69",
});


const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { db, auth };*/