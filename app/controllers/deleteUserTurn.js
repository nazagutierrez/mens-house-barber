import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function deleteUserTurn(userUid) {
    const userRef = doc(db, "usuarios", userUid);
    await updateDoc(userRef, {
        "turno": {}
    });
    
}