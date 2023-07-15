const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  if (email === "" || password === "") {
    alert("Ти шо робиш? Ану бігом шось написав!");
  } else {
    const formObj = {
      email,
      password,
    };
    console.log(formObj);
    formEl.reset();
  }
}
