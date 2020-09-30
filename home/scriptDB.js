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

var bod = document.getElementById("myBody");
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
  var nam;
firebase.database().ref('UserData/'+ Username).on('value', function(snapshot){
           
           if(!snapshot.val()){
             alert("No Username Found !");
         }
        
        // document.getElementById('Fname').value = snapshot.val().FirstName;
        // document.getElementById('Lname').value = snapshot.val().LastName;
          // document.getElementById("myName").innerHTML = "Welcome " + snapshot.val().FirstName + " ! :)";
  nam = snapshot.val().FirstName;
          });

  auth.onAuthStateChanged(function(user) {
    if(user){
     var em = user.email;
     console.log(em);
     if (user != null) {
       
       bod.style.display = "block";
       document.getElementById("myName").innerHTML = "Welcome " + nam + " ! :)";
        
      
         }
     }else{
             console.log("Not logged in");     
             location.replace("https://apolloxy.github.io/login/");
      
          
     }

  });
