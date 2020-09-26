  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyANtN0D5DLcRTOEZr3tQBBn7e6nePQAVSU",
    authDomain: "chat-c565a.firebaseapp.com",
    databaseURL: "https://chat-c565a.firebaseio.com",
    projectId: "chat-c565a",
    storageBucket: "chat-c565a.appspot.com",
    messagingSenderId: "582626485202",
    appId: "1:582626485202:web:04cb2b68cea057a9949e0b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnLogout = document.getElementById('btnLogout');


  btnLogin.addEventListener('click', e =>{
 
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        
        window.alert('Error :' + errorMessage + errorCode);
      });

      

  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
        console.log(firebaseUser);
     }else{
        console.log("Not logged in");
     }

  });