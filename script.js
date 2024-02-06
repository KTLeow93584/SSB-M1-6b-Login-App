const localUserData = {
  name: "Kaz",
  username: "admin",
  password: "123456"
};

function login() {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  const result = document.getElementById("result");

  if (usernameInput.value.trim().length == 0 && passwordInput.value.trim().length == 0) {
    result.textContent = "Both the username and password fields are empty! Please fulfill both missing fields and try again.";
    return;
  }
  else if (usernameInput.value.trim().length == 0) {
    result.textContent = "The username field must is empty! Please fulfill the missing field and try again.";
    return;
  }
  else if (passwordInput.value.trim().length == 0) {
    result.textContent = "The password field must is empty! Please fulfill the missing field and try again.";
    return;
  }

  const isCorrectUsername = usernameInput.value === localUserData.username;
  const isCorrectPassword = passwordInput.value === localUserData.password;

  if (isCorrectUsername && isCorrectPassword)
    result.textContent = `Welcome, ${localUserData.name}!`;
  else if (isCorrectUsername)
    result.textContent = "Wrong password.";
  else
    result.textContent = "Wrong password/username.";
}