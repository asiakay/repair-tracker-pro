import { db } from './firebaseClient';
import { getDoc, doc, setDoc } from "firebase/firestore";
// import { useUser } from '@/hooks/useUser';
//import { auth } from './firebase';
// const userRef = doc(db, "users", user.uid);

 const addUserToFirestore = async (user, name, email) => {
  try {
    // const docSnap = await getDoc(userRef);
    //const userRef = doc(db, "users", user.uid);

    await setDoc(doc, (db, "users", user.uid), {
      name: name,
      email: email
    });
    console.log('Adding user to Firestore:', user);
  } catch (error) {
    console.log('Error adding user to Firestore:', error + user);
  }
};

 /*    const userRef = db.collection('users').doc(user.uid);
  const defaultRoles = {
    admin: false,
    florist: true,
    assistant: false
  }; */

/*   return userRef.set({
    email: user.email,
    roles: defaultRoles
  }, { merge: true });
};
 */

export { addUserToFirestore };