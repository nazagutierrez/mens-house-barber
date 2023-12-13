import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";


export default async function toggleAuthorization(user) {
    const docRef = doc(db, "usuarios", user.id);
  await updateDoc(docRef, {
    esAutorizado: !user.esAutorizado,
  });
}
