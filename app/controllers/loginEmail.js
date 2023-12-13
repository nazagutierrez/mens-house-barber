import { auth, db } from "../firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { loginError, registrationError } from "../../components/errors/validationErrors"

function setNewUserDb(email, name, surName, isAuthorized, isAdmin, result) {
  // Setting registered user to database
  const docRef = doc(db, `usuarios/${result.user.uid}`);
  setDoc(docRef, { nombre: name, apellido: surName, correo: email, esAutorizado: isAuthorized, esAdmin: isAdmin, turno: [] });
}

async function loginEmail(email, password, name, surName, isAuthorized, isRegistering, isAdmin) {
  if (isRegistering) {
    // Create new user
    try {
      const register = await createUserWithEmailAndPassword(auth,email, password).then((user) => { 
        console.log(user)
        return user
     });
      setNewUserDb(email, name, surName, isAuthorized, isAdmin, register);
    } catch (error) {
      registrationError(error.message)
    }
  } else {
    // Log in existing user
    try {
    await signInWithEmailAndPassword(auth, email, password).then((user) => { return user });
    } catch (error) {
      console.log(error.message)
      loginError(error.message)
    }
  }
}

export default loginEmail;