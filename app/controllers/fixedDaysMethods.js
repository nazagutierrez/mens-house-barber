import { arrayRemove, arrayUnion, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";

const q = query(collection(db, "usuarios"), where("esAdmin", "==", true));

export async function deleteFixedDay(howOften, dayToDelete) {
    const prueba = await getDocs(q);
    let adminId = ""
    prueba.forEach((doc) => adminId += doc.id);

    const userRef = doc(db, "usuarios", adminId);
    if (howOften === "biweekly") {
        await updateDoc(userRef, {
            diasQuincenalesDeshabilitados: arrayRemove(dayToDelete)
        });    
    } else if (howOften === "weekly") {
        await updateDoc(userRef, {
            diasSemanalesDeshabilitados: arrayRemove(dayToDelete)
        });    
        
    }
}

export async function setFixedDay(howOften, dayToAdd) {
    const prueba = await getDocs(q);
    let adminId = ""
    prueba.forEach((doc) => adminId += doc.id);
    
    const userRef = doc(db, "usuarios", adminId);
    if (howOften === "biweekly") {
        await updateDoc(userRef, {
            diasQuincenalesDeshabilitados: arrayUnion(dayToAdd)
        });    
    } else if (howOften === "weekly") {
        await updateDoc(userRef, {
            diasSemanalesDeshabilitados: arrayUnion(dayToAdd)
        });    
    }
}


export async function getFixedDays(howOften) {
  const querySnapshot = await getDocs(q);
  let fixedDays;
  querySnapshot.forEach((doc) => {
    if (howOften === "weekly") {
        fixedDays = doc.data().diasSemanalesDeshabilitados;
    } else if (howOften === "biweekly") {
        fixedDays = doc.data().diasQuincenalesDeshabilitados;
    }
  });
  return fixedDays;
}