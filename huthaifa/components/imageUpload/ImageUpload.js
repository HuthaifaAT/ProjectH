import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, Grid } from '@mui/material';
import Fab from '@mui/material/Fab';
// import { AddPhotoAlternateIcon } from '@mui/icons-material';
import Classes from './ImageUpload.module.css';

export default function ImageUpload({ imageSetter }, props) {
	const [state, setState] = useState({
		mainState: 'initial', // initial, search, gallery, uploaded
		imageUploaded: 0,
		selectedFile: null,
	});

	const handleUploadClick = (event) => {
		console.log('test');
		var file = event.target.files[0];
		const reader = new FileReader();
		var url = reader.readAsDataURL(file);

		reader.onloadend = function (e) {
			setState({
				selectedFile: [reader.result],
			});
			imageSetter.setImage(reader.result);
			console.log(reader.result);
		};
		console.log(url); // Would see a path?

		setState({
			mainState: 'uploaded',
			selectedFile: event.target.files[0],
			imageUploaded: 1,
		});
	};

	const imageResetHandler = (event) => {
		console.log('Click!');
		setState({
			mainState: 'initial',
			selectedFile: null,
			imageUploaded: 0,
		});
	};
	function renderUploadedState() {
		return (
			<CardActionArea onClick={imageResetHandler}>
				<img width="100%" className={Classes.media} src={state.selectedFile} />
			</CardActionArea>
		);
	}

	function renderInitialState() {
		return (
			<CardContent
				sx={{ bgcolor: 'burlywood', borderRadius: '20px', border: 'none' }}>
				<Grid
					container
					justify="center"
					alignItems="center"
					sx={{ border: 'none' }}>
					<input
						accept="image/*"
						className={Classes.input}
						id="contained-button-file"
						multiple
						type="file"
						onChange={handleUploadClick}
					/>
					<label htmlFor="contained-button-file">
						<Fab component="span" className={Classes.button}>
							{/* <AddPhotoAlternateIcon /> */}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="45px"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="darkgrey"
								strokeWidth="2">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									viewBox="-27 13 60 20"
									width="30px"
									fill="black">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
										clipRule="evenodd"
									/>
								</svg>
							</svg>
						</Fab>
					</label>
				</Grid>
			</CardContent>
		);
	}

	return (
		<React.Fragment>
			<div className={Classes.rootContainer}>
				<Card
					className={props.cardName}
					sx={{ border: 'none', borderRadius: '20px' }}>
					{(state.mainState == 'initial' && renderInitialState()) ||
						(state.mainState == 'uploaded' && renderUploadedState())}
				</Card>
			</div>
		</React.Fragment>
	);
}
