sub = () => {
    let email = document.getElementById("_E-mail")
    let password = document.getElementById("_Password")
  
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Logged in Successfully")
      window.location.assign("./Data.html")
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
}