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

  var Username, Email, firstName, lastName;
   var pass = document.getElementById('txtPassword');
        function get(){
          Username = document.getElementById("txtEmail").value
         }
 
document.getElementById("btnLogin").onclick = function(){

          get();
          firebase.database().ref('Email/'+ Username).on('value', function(snapshot){
        if(!snapshot.val()){
              alert("No Username Found !");
          }
        var pop = snapshot.val().Email;
        const promise = auth.signInWithEmailAndPassword(pop, pass.value);
        promise.catch(e => alert(e.message));
          
          });
  
   
}

  function LogOut(){

    auth.signOut();
    alert("Signed Out");
  }
  

  auth.onAuthStateChanged(function(user) {
    if(user){
      //location.replace("https://apolloxy.github.io/home/");  
     var em = user.email;
     console.log(em);
     if (user != null) {
       //location.replace("https://apolloxy.github.io/home/");  
          get();
      location.assign("https://apolloxy.github.io/home/index.html" + "?username=" + Username);
      alert("Signed In " + em);
      
     }
     }else{
       if (user != null) {
      location.replace("https://apolloxy.github.io/login/");  
        console.log("Not logged in");
      
     }   
      
     }

  });
