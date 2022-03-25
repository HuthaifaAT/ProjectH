import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import ImageUpload from 'components/imageUpload/ImageUpload.js';
import {
	Box,
	Typography,
	Stack,
	Divider,
	Card,
	Paper,
	TextField,
	Button,
} from '@mui/material';
import { Fragment, useRef, useState, useEffect } from 'react';
import { auth, db } from 'config/firebase-config';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';

Array.prototype.LogMe = function () {
	console.log("array's length: ", this.length);
	for (let i = 0; i < this.length; i++) {
		console.log(
			`${
				i === 0
					? '1st element'
					: i === 1
					? '2nd element'
					: i === 2
					? '3rd element'
					: `${i + 1}th element`
			} ${this[i]} type: ${typeof this[i]}`
		);
	}
};

export default function Home() {
	const [phoneNumber, setPhoneNumber] = useState(null);
	const [enteredOPT, setEnteredOPT] = useState(null);
	const [showOTP, setShowOTP] = useState(false);
	const [showHelperText, setShowHelperText] = useState(false);
	const [image, setImage] = useState(process.env.PROTFOLIO_IMAGE_URL);
	const phoneNumberRef = useRef();
	const imgLoader = ({ src, width, quality }) => {
		return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
	};

	const addDocumnetToFirestore = async (e, cName, dta) => {
		e.preventDefault();
		// try {
		// 	const docRef = await addDoc(collection(db, cName), dta);
		// 	console.log('Document written with ID: ', docRef.id);
		// } catch (e) {
		// 	console.error('Error adding document: ', e);
		// }
		const querySnapshot = await getDocs(collection(db, 'testingCollection'));
		querySnapshot.forEach((doc) => {
			console.log(`${doc.id} => ${doc.data()}`);
		});
	};

	const collectionName = 'testingCollection',
		data = {
			id: 1,
			name: 'first data',
			discription:
				'testing data being written to firestore database though web application',
		};

	const imageSetter = {
		setImage,
	};

	const GenerateRecaptcha = () => {
		window.recaptchaVerifier = new RecaptchaVerifier(
			'reacp-container',
			{
				size: 'invisible',
				callback: (response) => {
					// reCAPTCHA solved, allow signInWithPhoneNumber.
				},
			},
			auth
		);
	};
	const phoneNumberSetHandler = (e) => {
		setPhoneNumber(e.target.value);
	};

	const phoneAuthHandler = (e) => {
		let testArray = [1, 2, 3, 4, 5, 'enas'];
		setShowOTP(true);
		testArray.LogMe();
		setPhoneNumber(phoneNumberRef.current.value);
		console.log(phoneNumberRef.current.target);
		GenerateRecaptcha();
		let appVerifier = window.recaptchaVerifier;
		signInWithPhoneNumber(auth, phoneNumber, appVerifier)
			.then((confRes) => {
				window.confirmationResult = confRes;
				console.log(confRes);
			})
			.catch((err) => {
				console.log(err.message);
			});
	};
	const checkOTPHandler = (e) => {
		setEnteredOPT(e.target.value);
		setShowHelperText(false);
		let otp = e.target.value;

		if (otp.length === 6) {
			let confirmationResult = window.confirmationResult;
			confirmationResult
				.confirm(otp)
				.then((result) => {
					// User signed in successfully.
					const user = result.user;
					// ...
				})
				.catch((error) => {
					// User couldn't sign in (bad verification code?)
					// ...
				});
		}
	};
	return (
		<Fragment>
			<Head>
				<title>My Portfolio</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Stack>
				<Box>
					<Card sx={{ borderRadius: '25px' }}>
						<Paper
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'flex-start',
								flexWrap: 'nowrap',
								// alignItems: 'center',
								minHeight: '30vh',
							}}>
							{!!image ? (
								<Box sx={{ p: 5 }}>
									<Image
										// loader={imgLoader}
										src={process.env.PROTFOLIO_IMAGE_URL}
										alt="profile-image"
										width="320"
										height="320"
									/>
								</Box>
							) : (
								<ImageUpload imageSetter={imageSetter} />
							)}
							<Typography variant="h2" align="center" sx={{ mt: 7 }}>
								Huthaifa Taya
							</Typography>
						</Paper>
					</Card>
				</Box>
				<Divider
					variant="middle"
					sx={{ my: 3, bgcolor: 'black', height: '2px' }}
					light
				/>
				<Box>
					<Card>
						<Paper
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-around',
								alignItems: 'center',
								p: 5,
								gap: 5,
							}}>
							<Stack
								direction="row"
								sx={{
									width: '50%',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}>
								<TextField
									placeholder="+962790936871"
									ref={phoneNumberRef}
									variant="outlined"
									onBlur={phoneNumberSetHandler}
									sx={{ borderRadius: '25%', border: 'none', width: '60%' }}
								/>
								<Box id="reacp-container" sx={{ px: 1 }} />
								<Button
									variant="contained"
									onClick={phoneAuthHandler}
									sx={{ py: 1.9, width: '40%' }}>
									Check Phone!
								</Button>
							</Stack>
							{showOTP && (
								<TextField
									label="OTP code"
									onBlur={checkOTPHandler}
									sx={{ width: '40%' }}
									onSelect={() => {
										setShowHelperText(true);
									}}
									helperText={
										showHelperText
											? 'Enter the code in the message sent to the above phone number'
											: null
									}
								/>
							)}
							<Button
								onClick={(e) =>
									addDocumnetToFirestore(e, collectionName, data)
								}>
								Add Data testing
							</Button>
						</Paper>
					</Card>
				</Box>
				<div>
					{/* <MessengerCustomerChat
					pageId="109087308400962"
					appId="520772699413481"
					htmlRef="<REF_STRING>"
				/> */}
				</div>
			</Stack>
		</Fragment>
	);
}
