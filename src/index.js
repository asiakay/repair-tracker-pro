import { initializeApp } from 'firebase/app';

async function signIn() {
    // Sign in Firebase using popup auth and Google as the identity provider.
     var provider = new GoogleAuthProvider();
     await signInWithPopup(getAuth(), provider);
   }

 // Signs-out of Friendly Chat.
 function signOutUser() {
    // Sign out of Firebase.
    signOut(getAuth());
  }
  

   // Initialize firebase auth
 function initFirebaseAuth() {
    // Listen to auth state changes.
    onAuthStateChanged(getAuth(), authStateObserver);
  }

   // Returns the signed-in user's profile Pic URL.
 function getProfilePicUrl() {
    return getAuth().currentUser.photoURL || '/images/profile_placeholder.png';
  }

   // Returns the signed-in user's display name.
 function getUserName() {
    return getAuth().currentUser.displayName;
  }

   // Returns true if a user is signed-in.
 function isUserSignedIn() {
    return !!getAuth().currentUser;
  }
  

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);