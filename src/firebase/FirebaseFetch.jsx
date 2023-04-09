import {
  query,
  orderBy,
  where,
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./config";

export const firestoreFetch = async (idTipo) => {
  let q;
  if (idTipo) {
    q = query(collection(db, "productos"), where("kind", "==", idTipo));
  } else {
    q = query(collection(db, "productos"), orderBy("name"));
  }

  const querySnapshot = await getDocs(q);
  const dataFromFirestore = querySnapshot.docs.map((document) => ({
    id: document.id,
    ...document.data(),
  }));
  return dataFromFirestore;
};

export const firestoreFetchItem = async (idItem) => {
  const docRef = doc(db, "productos", idItem);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return {
      id: idItem,
      ...docSnap.data(),
    };
  } else {
    console.log("No such document!");
  }
};
