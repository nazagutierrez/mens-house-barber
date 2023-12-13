import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

async function getUsers() {
  // Find admin by database role
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  let users = [];
  querySnapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() })
  });
  return users;
}

export default getUsers;
