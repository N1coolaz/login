const firebaseConfig = {
  apiKey: "AIzaSyBoMJ8NK8WNQCM-M3f0xBoOioiPKVJZEHw",
  authDomain: "etec-c8a17.firebaseapp.com",
  databaseURL: "https://etec-c8a17-default-rtdb.firebaseio.com",
  projectId: "etec-c8a17",
  storageBucket: "etec-c8a17.appspot.com",
  messagingSenderId: "152556708617",
  appId: "1:152556708617:web:5733b3f5e2109c099d69d8",
  measurementId: "G-Z5EXRKL5V6"
}

firebase.initializeApp(firebaseConfig)

let auth = firebase.auth()