import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const q = query(collection(db, "usuarios"), where("esAdmin", "==", true));

async function getAdmin() {
  // Find admin by database role
  const querySnapshot = await getDocs(q);
  let isAdmin;
  querySnapshot.forEach((doc) => {
    isAdmin = doc.id;
  });
  return isAdmin;
}

export default getAdmin;