import { initializeApp, getApps } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const config = {
    apiKey: "AIzaSyBxFVSc5aFn_3-M4gv-_js1TVNgaMwip5Y",
    authDomain: "bharatvidhi-ae6d8.firebaseapp.com",
    databaseURL: "https://bharatvidhi-ae6d8-default-rtdb.firebaseio.com",
    projectId: "bharatvidhi-ae6d8",
    storageBucket: "bharatvidhi-ae6d8.appspot.com",
    messagingSenderId: "30484757734",
    appId: "1:30484757734:web:55e35018792089ffaa8f27",
    measurementId: "G-XFZRXX1MFT",
};

const app = getApps().length === 0 ? initializeApp(config) : getApps()[0];

const db = getDatabase(app);

export { app, db };
