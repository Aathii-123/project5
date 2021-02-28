function validate() {
    let name= document.getElementById("name")
    let email= document.getElementById("email")
    let password= document.getElementById("password")
    if (x == "") {
      alert("Name must be filled out");
      name.focus()
      return false;
    }
    let email= document.getElementById("email")
    if (x == "") {
      alert("email must be filled out");
      email.focus()
      return false;
    }
    let password= document.getElementById("password")
    if (x == "") {
      alert("password must be filled out");
      password.focus()
      return false;
    }
    if(isNaN(mobile.value)){
        alert("mobile number is invalid")
        mobile.focus()
        return false;
    }
  }