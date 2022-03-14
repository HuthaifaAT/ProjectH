import React from "react";
import { Box } from "@mui/material";
import Classes from "./NavBar.module.css";
import StyledLink from "../styledComps/StyledLink";

const NavBar = () => {
	return (
		<Box className={Classes.NavContainer}>
			<StyledLink passedHref="/">Home</StyledLink>
			<StyledLink passedHref="/">Profile</StyledLink>
			<StyledLink passedHref="/">Settings</StyledLink>
		</Box>
	);
};

export default NavBar;
