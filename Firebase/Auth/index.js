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

  var txtEmail = document.getElementById('txtEmail');
  var txtPassword = document.getElementById('txtPassword');
  var btnLogin = document.getElementById('btnLogin');
  var btnSignUp = document.getElementById('btnSignUp');
  var btnLogout = document.getElementById('btnLogout');
  var btnVerifyEmail =document.getElementById('btnVerifyEmail');
  var btnResetPass =document.getElementById('btnResetPass');
  var dName =document.getElementById('dName');
  var dImage =document.getElementById('dImage'); 
  var btnUdtProfile =document.getElementById('btnUdtProfile');
  var cEmail =document.getElementById('cEmail'); 
  var btncEmail =document.getElementById('btncEmail'); 
  var cPass =document.getElementById('cPass'); 
  var btncPass =document.getElementById('btncPass'); 
  var delectACC =document.getElementById('delectACC'); 

  var btnGoogleLogin =document.getElementById('btnGoogleLogin'); 
  var btnFacebookLogin =document.getElementById('btnFacebookLogin'); 
  var btnTwitterLogin =document.getElementById('btnTwitterLogin'); 

  btnLogin.addEventListener('click', e =>{
      var email = txtEmail.value;
      var pass = txtPassword.value;

      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.messag));

  });

  btnSignUp.addEventListener('click', e =>{
    var email = txtEmail.value;
    var pass = txtPassword.value;

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.messag));

});

  btnLogout.addEventListener('click', e =>{
    auth.signOut();
    console.log("Signed Out");

  });
///////////////////////////////////////////////

  btnVerifyEmail.addEventListener('click', e =>{
    auth.currentUser.sendEmailVerification()
    .then(() => {
      console.log("Email verification sent!")
      // ...
    });
  });

  btnResetPass.addEventListener('click', e =>{
    var email = txtEmail.value;
    auth.sendPasswordResetEmail(email)
    .then(() => {
      console.log("Password reset email sent!")
      // ...
    });
  });

  btnUdtProfile.addEventListener('click', e =>{
    var Dname = dName.value;
    var Dimage = dImage.value;
    const user = firebase.auth().currentUser;

user.updateProfile({
 
  displayName: Dname,
  photoURL: Dimage
}).then(() => {
  console.log("Profile Updated!");
  // Update successful
  // ...
}).catch((error) => {
  console.log("Profile Not Updated!");
  console.log(error);
  // An error occurred
  // ...
}); 

});

btncEmail.addEventListener('click', e =>{
  var email = cEmail.value;
  const user = firebase.auth().currentUser;

user.updateEmail(email).then(() => {
  console.log("Email changed!");
  // Update successful
  // ...
}).catch((error) => {
  console.log(error);
  // An error occurred
  // ...
});
});
btncPass.addEventListener('click', e =>{
  var pass = cPass.value;
  const user = firebase.auth().currentUser;

  user.updatePassword(pass).then(() => {
    console.log("Password changed!");
    // Update successful
    // ...
  }).catch((error) => {
    console.log(error);
    // An error occurred
    // ...
  });
});

deleteACC.addEventListener('click', e =>{
  const user = firebase.auth().currentUser;

  user.delete().then(() => {
    // User deleted.
    console.log("Account Deleted Successfully!");
  }).catch((error) => {
    // An error ocurred
    // ...
  });

});


////////////////////////////////////////////////////////////////////////////
btnGoogleLogin.addEventListener('click', e =>{
  var googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.addScope('https://www.googleapis.com/auth/userinfo.email');

  firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
  
    console.log(result.user);
    
  }).catch((error) => {
     console.log(error);
  });

});
btnFacebookLogin.addEventListener('click', e =>{
  var facebookProvider = new firebase.auth.FacebookAuthProvider();
  facebookProvider.addScope('email');
  firebase.auth()
  .signInWithPopup(facebookProvider)
  .then((result) => {
  
    console.log(result.user);
    
  }).catch((error) => {
     console.log(error);
  });

});
btnTwitterLogin.addEventListener('click', e =>{
  var twitterProvider = new firebase.auth.TwitterAuthProvider();

  firebase.auth()
  .signInWithPopup(twitterProvider)
  .then((result) => {
  
    console.log(result.user);
    
  }).catch((error) => {
     console.log(error);
  });

});

var repo = new MyUserDataRepo();

// Get reference to the currently signed-in user
var prevUser = auth.currentUser;

// Get the data which you will want to merge. This should be done now
// while the app is still signed in as this user.
var prevUserData = repo.get(prevUser);

// Delete the user's data now, we will restore it if the merge fails
repo.delete(prevUser);

// Sign in user with the account you want to link to
auth.signInWithCredential(newCredential).then((result) => {
  console.log("Sign In Success", result);
  var currentUser = result.user;
  var currentUserData = repo.get(currentUser);

  // Merge prevUser and currentUser data stored in Firebase.
  // Note: How you handle this is specific to your application
  var mergedData = repo.merge(prevUserData, currentUserData);

  return prevUser.linkWithCredential(result.credential)
    .then((linkResult) => {
      // Sign in with the newly linked credential
      return auth.signInWithCredential(linkResult.credential);
    })
    .then((signInResult) => {
      // Save the merged data to the new user
      repo.set(signInResult.user, mergedData);
    });
}).catch((error) => {
  // If there are errors we want to undo the data merge/deletion
  console.log("Sign In Error", error);
  repo.set(prevUser, prevUserData);
});





  auth.onAuthStateChanged(function(user) {
    if(user){
    console.log(user);
    }else{
    console.log("Not logged in");
    }

  });

