
  function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    if (password != confirmPassword) {
      document.getElementById("error-message").innerHTML = "Passwords do not match.";
      return false;
    }
    return true;
  }

  window.addEventListener("load", function() {
    var form = document.getElementById("my-form");
    form.addEventListener("submit", validatePassword);
  });

