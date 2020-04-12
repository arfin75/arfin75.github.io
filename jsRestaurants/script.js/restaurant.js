function validateForm() {

  let name = document.getElementById("name1").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  console.log(name);
  console.log(email);
  console.log(number);

  if (name == "") {
    document.getElementById("error1").style.display = "block";
    return false;
  alert ("Please enter your full name");
}

  if (email == "") {
  document.getElementById("error1").style.display = "block";
  return false;
   alert ("Please enter your email");
}

   if (phone == "") {
  document.getElementById("error1").style.display = "block";
  return false;
  alert ("Please enter your phone number");

  }
}
