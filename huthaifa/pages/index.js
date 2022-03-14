import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ImageUpload from 'components/imageUpload/ImageUpload.js';
import {
	Box,
	Typography,
	Stack,
	Divider,
	Select,
	Card,
	Paper,
	Fab,
} from '@mui/material';
import { useState } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
export default function Home() {
	const [image, setImage] = useState(null);
	const imgLoader = ({ src, width, quality }) => {
		return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
	};
	const imageSetter = {
		setImage,
	};
	return (
		<Stack>
			<Box>
				<Card sx={{ borderRadius: '25px' }}>
					<Paper
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'flex-start',
							flexWrap: 'nowrap',
							alignItems: 'center',
							minHeight: '30vh',
						}}>
						{!!image ? (
							<Image
								loader={imgLoader}
								src={image}
								alt="profile-image"
								width={350}
								height={350}
							/>
						) : (
							<ImageUpload imageSetter={imageSetter} />
						)}
						<Typography variant="h2" align="center">
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
					<Paper></Paper>
				</Card>
			</Box>
			<div>
				<MessengerCustomerChat
					pageId="109087308400962"
					appId="520772699413481"
					htmlRef="<REF_STRING>"
				/>
			</div>
		</Stack>
	);
}
