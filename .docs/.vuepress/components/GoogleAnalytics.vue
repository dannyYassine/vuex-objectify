<template>
  <div></div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/analytics";

export default {
  name: "GoogleAnalytics",
  created() {
    var firebaseConfig = {
      apiKey: "AIzaSyCH7HmeDEnlU-x5kQ365eLG0O2zlnnUZKU",
      authDomain: "vuex-objectify.firebaseapp.com",
      projectId: "vuex-objectify",
      storageBucket: "vuex-objectify.appspot.com",
      messagingSenderId: "510281161638",
      appId: "1:510281161638:web:f7c586736d9ffa54450d67",
      measurementId: "G-32WFMK0H5Y"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
</script>

<style scoped>

</style>