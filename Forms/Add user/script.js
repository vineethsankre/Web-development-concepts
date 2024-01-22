let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");

let workingStatusEl = document.getElementById("status");

let formData = {
  name: "",
  email: "",
};

nameEl.addEventListener("change", function(event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
  formData.name = event.target.value;
});

emailEl.addEventListener("blur", function(event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
  formData.email = event.target.value;
});

workingStatusEl.addEventListener("change", function(event) {
  formData.status = event.target.value;
});

myFormEl.addEventListener("submit", function(event) {
  event.preventDefault();
});