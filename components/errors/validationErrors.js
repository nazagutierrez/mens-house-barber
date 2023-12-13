// Insert error into the login modal
function emailError(err) {
    document.getElementById("error-email").innerHTML = err;
  }
  function passwordError(err) {
    document.getElementById("error-password").innerHTML = err;
  }
  
  export function registrationError(errorMessage) {
    switch (errorMessage) {
      case "Firebase: Error (auth/invalid-email).":
        let errorEmail = "Email invalido!";
        emailError(errorEmail);
        passwordError("");
        break;
      case "Firebase: Error (auth/email-already-in-use).":
        let errorInUse = "Email ya en uso!";
        emailError(errorInUse);
        passwordError("");
        break;
      case "Firebase: Password should be at least 6 characters (auth/weak-password).":
        let errorWeakPass = "La contraseña debe ser de al menos 6 caracteres";
        passwordError(errorWeakPass);
        emailError("");
        break;
      default:
        let errorDefault = "Ocurrio un error! Intente mas tarde";
        passwordError(errorDefault);
        emailError("");
    }
  }
  
  export function loginError(errorMessage) {
    switch (errorMessage) {
      case "Firebase: Error (auth/invalid-email).":
        let errorEmail = "Email invalido!";
        emailError(errorEmail);
        passwordError("");
        break;
      case "Firebase: Error (auth/wrong-password).":
        let errorPassword = "Contraseña incorrecta!";
        passwordError(errorPassword);
        emailError("");
        break;
      case "Firebase: Error (auth/user-not-found).":
        let errorNotFound = "Usuario no encontrado!";
        emailError(errorNotFound);
        passwordError("");
        break;
      default:
        let errorDefault = "Ocurrio un error! Intente mas tarde";
        passwordError(errorDefault);
        emailError("");
    }
  }
  