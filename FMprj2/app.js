let subscribeBtn = document.querySelector("#submit-btn");
let dismissBtn = document.querySelector("#dismiss-btn");
let mainContainer = document.querySelector(".newsletter-container");
let successContainer = document.querySelector(".success-container");
let email = document.querySelector("#mail");
let span = document.querySelector(".msg");
let dynamicMail = document.querySelector(".dynamic-mail");

subscribeBtn.addEventListener("submit", (e) => {
  let mail = [...email.value];
  let state = validateEmail(email.value);

  if (state === true) {
    e.preventDefault();
    mainContainer.style.display = "none";
    successContainer.style.display = "flex";
    dynamicMail.innerText = email.value;
    console.log(state);
  } else if (mail.length === 0) {
    e.preventDefault();
    email.style.border = "1px solid rgba(255, 0, 0, 0.788)";
    email.style.background = "rgba(255, 0, 0, 0.212)";
    span.style.display = "inline";
    span.innerText = "Email is mandatory!";
  } else if (state === false) {
    e.preventDefault();
    email.style.border = "1px solid rgba(255, 0, 0, 0.788)";
    email.style.background = "rgba(255, 0, 0, 0.212)";
    span.style.display = "inline";
    span.innerText = "Email is invalid!";
  } else {
    return;
  }
});

dismissBtn.addEventListener("click", () => {
  mainContainer.style.display = "grid";
  successContainer.style.display = "none";
  email.style.border = "1px solid rgba(128, 128, 128, 0.507)";
  email.style.background = "rgba(255, 255, 255)";
  span.style.display = "none";
  email.value = "";
});

function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}

email.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    subscribeBtn.addEventListener("submit", (e) => {
      let mail = [...email.value];
      let state = validateEmail(email.value);

      if (state === true) {
        e.preventDefault();
        mainContainer.style.display = "none";
        successContainer.style.display = "flex";
        dynamicMail.innerText = email.value;
        console.log(state);
      } else if (mail.length === 0) {
        e.preventDefault();
        email.style.border = "1px solid rgba(255, 0, 0, 0.788)";
        email.style.background = "rgba(255, 0, 0, 0.212)";
        span.style.display = "inline";
        span.innerText = "Email is mandatory!";
      } else if (state === false) {
        e.preventDefault();
        email.style.border = "1px solid rgba(255, 0, 0, 0.788)";
        email.style.background = "rgba(255, 0, 0, 0.212)";
        span.style.display = "inline";
        span.innerText = "Email is invalid!";
      } else {
        return;
      }
    });
  } else if (event.key === "KeyZ" && (event.ctrlKey || event.metaKey)) {
    // Undo Operations
    email.value = "";
  }
});
