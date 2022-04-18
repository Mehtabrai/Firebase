function submit(){
    const email = document.getElementById("_E-mail").value;
    const password = document.getElementById("_Password").value;

     firebase.auth().createUserWithEmailAndPassword(email, password)
     .then((userCredential) => {
       // Signed in 
       var user = userCredential.user;
       window.location.assign("./index.html")
       // ...
     })
     .catch((error) => {
       var errorCode = error.code;
       var errorMessage = error.message;
       // ..
     });
      
      }

