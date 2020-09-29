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

  const auth = firebase.auth();
bod.style.display = "none";
  function LogIn(){

    var email = document.getElementById('txtEmail');
    var pass = document.getElementById('txtPassword');

    const promise = auth.signInWithEmailAndPassword(email.value, pass.value );
    promise.catch(e => alert(e.message));
    

    
  }

  function LogOut(){
    auth.signOut();
    alert("Signed Out");
  }
  
 var bod = document.getElementById("myBody");
  auth.onAuthStateChanged(function(user) {
    if(user){
     var em = user.email;
     console.log(em);
     if (user != null) {
     alert("Signed In " + em);
       bod.style.display = "block";
         }
     }else{
       
       window.onload = function() {
         
       window.location.replace("https://apolloxy.github.io/login/");
}
         // location.replace("https://apolloxy.github.io/login/");  
        console.log("Not logged in");
      
          
     }

  });
