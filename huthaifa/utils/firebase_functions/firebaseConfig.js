import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyC2D-bSLul37_OWgEO6j11CfxXxDGsiZzw',
	authDomain: 'huthaifasite.firebaseapp.com',
	databaseURL:
		'https://huthaifasite-default-rtdb.europe-west1.firebasedatabase.app',
	projectId: 'huthaifasite',
	storageBucket: 'huthaifasite.appspot.com',
	messagingSenderId: '824073627956',
	appId: '1:824073627956:web:94c87bd19a9d70b1d51d61',
	measurementId: 'G-XRHPYP3W91',
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
