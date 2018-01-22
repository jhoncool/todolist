import Vue from "vue";
import VueFire from "vuefire";
import firebase from "firebase";

Vue.use(VueFire);

const config = {
  apiKey: "AIzaSyDO2CYy42yfazJWwOL2vL2mE2SDP1hWSiY",
  authDomain: "todolist-78009.firebaseapp.com",
  databaseURL: "https://todolist-78009.firebaseio.com",
  projectId: "todolist-78009",
  storageBucket: "todolist-78009.appspot.com",
  messagingSenderId: "987800290069"
};

export const firebaseApp = firebase.initializeApp(config);
