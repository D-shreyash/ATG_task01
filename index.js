const handleLogin = () => {
  document.getElementById("formLogin").style.display = "none";
  document.getElementById("formSignup").style.display = "block";
};

const handleSignup = () => {
  document.getElementById("formLogin").style.display = "block";
  document.getElementById("formSignup").style.display = "none";
};

const handleProfile = () => {
  document.getElementById("createAccount").style.display = "none";
  document.getElementById("profile").style.display = "block";
  var backdrop = document.querySelector(".modal-backdrop");
  backdrop.style.display = "none";
};

const handleCreateAccount = () => {
  document.getElementById("createAccount").style.display = "block";
  document.getElementById("profile").style.display = "none";
  var backdrop = document.querySelector(".modal-backdrop");
  backdrop.style.display = "block";
};
