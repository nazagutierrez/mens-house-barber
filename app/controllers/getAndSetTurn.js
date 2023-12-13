import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function setTurn(userUid, turn) {
  const userRef = doc(db, "usuarios", userUid);
  await updateDoc(userRef, { turno: turn });
}

export async function getAllTurns() {
  // Find admin by database role
  const querySnapshot = await getDocs(collection(db, "usuarios"));
  let turns = [];
  querySnapshot.forEach((doc) => {
    turns.push({ id: doc.id, ...doc.data().turno })
  });
  return turns;
}