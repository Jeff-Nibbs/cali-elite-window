// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAnvsm2si_WbavBolVirCkDz6_PbLss4ko',
  authDomain: 'calielitewindows.firebaseapp.com',
  projectId: 'calielitewindows',
  storageBucket: 'calielitewindows.appspot.com',
  messagingSenderId: '291812367486',
  appId: '1:291812367486:web:9df7cf6260248ed0504c2f',
  measurementId: 'G-7DZL4G3D8P',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
