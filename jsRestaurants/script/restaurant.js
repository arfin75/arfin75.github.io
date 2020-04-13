var name;
var email;
var phone;

function validateForm() {

  name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  phone = document.getElementById("phone").value;
  console.log(name);
  console.log(email);
  console.log(phone);
  if (name == "") {
    // document.getElementById("error1").style.display = "block";
    alert("Please enter your full name");

  }
  if (email == "") {
    // document.getElementById("error1").style.display = "block";
    alert("Please enter your email");

  }

  if (phone == "") {
    // document.getElementById("error1").style.display = "block";
    alert("Please enter your phone number");

  }

return false;
}

/*
 if (name == "") {
    document.getElementById("error1").style.display = "block";
    alert("Please enter your full name");
    return false;
  }

  if (email == "") {
    document.getElementById("error1").style.display = "block";
    alert("Please enter your email");
    return false;
  }

  if (phone == "") {
    document.getElementById("error1").style.display = "block";
    alert("Please enter your phone number");
    return false;
  }
  return false;
}
*/
