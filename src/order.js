import { addDoc, collection,getDocs,query, where } from "firebase/firestore"; 
import { db } from "./components/userAuthorization/firebase";


const saveINDatabase=async()=>{

    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });
        console.log("Document written with ID: ", docRef.id);
       
      } catch (e) {
        console.error("Error adding document: ", e);
      }

}
const getFromDatabase=async()=>{
    
    const citiesRef = collection(db, "users");
    
    // Create a query against the collection.
    const q = query(citiesRef,where("middle" , "==",'Mathison'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });
    


}
export {saveINDatabase,getFromDatabase}
