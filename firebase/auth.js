import {auth} from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const signIn = async (email, password) => { 
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCredential.user);
    return {user: userCredential.user}
  } catch (error) {
    console.error(error.message);
    return {error: error.message}
  }
}

export const signOut = async () => {  
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error.message);
    return {error: error.message}
  }
}