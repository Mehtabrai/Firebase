
const add = () => {
    const username = document.getElementById("_title");
    const fathername = document.getElementById("_Desc");

        firebase.database().ref('users/' ).push({
          username: username.value,
          fathername: fathername.value,
        }).then((res)=> {
          console.log("Succesful")
          // confirm("success")
        }).catch((err)=>{
          console.log(err)
        })
        
      }
      
      let input = document.createElement("input")
      input.innerHTML = "one";
      input.setAttribute("type","text")
      console.log(input)
      const getdata = () =>{
      firebase
      .database()
      .ref('users/' )
       .on('child_added', (data) => {
        var data = data.val();
        console.log(data)
      });  
      }

