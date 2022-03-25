import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: process.env.FIREBASE_API_KEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_APPLICATION_ID,
	storageBucket: process.env.FIREBASE_PROJECT_ID,
	messagingSenderId: process.env.FIREBASE_STORAGE_BUCKET,
	appId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const getAllDocs = async (collectionName) => {
// 	// const collection = collection(firestore, collectionName);
// 	const docData = await getDocs(collection(firestore, collectionName));
// 	return;
// };

// export const addDocToCollection = async (collectionName, data) => {
// 	console.log('inside add a doc');
// 	try {
// 		const docRef = await addDoc(collection(firestore, collectionName), data);
// 		console.log('Document written with ID: ', docRef.id);
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

export const auth = getAuth(app);
