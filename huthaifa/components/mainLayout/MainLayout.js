import { Box, Container } from '@mui/material';
import React, { Component } from 'react';
import NavBar from 'components/navBar/NavBar';
import Classes from './MainLayout.module.css';

export default class MainLayout extends Component {
	render() {
		const { children, showNavBar = true } = this.props;

		return (
			<Box sx={{ bgcolor: '#d2d4d2' }}>
				{showNavBar && (
					<Box className={Classes.HeaderBar}>
						<NavBar />
					</Box>
				)}
				<Container
					maxWidth="xl"
					sx={{ maxWidth: { lg: '77vw' }, minHeight: '91vh', pt: '20px' }}>
					{children}
				</Container>
			</Box>
		);
	}
}
