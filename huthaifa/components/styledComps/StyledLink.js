import Link from "next/link";
import { styled } from "@mui/system";
import { Link as MuiLink } from "@mui/material";
import Classes from "./StyledLink.module.css";

import React, { useState } from "react";

function StyledLink({ passedHref, children }) {
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	const StyledLinkComp = styled(MuiLink)(({ theme }) => ({
		color: "white",
		textDecoration: "none",
		// "&:hover": {
		// 	cursor: "pointer",
		// 	background: "rgb(255,255,255)",
		// 	background:
		// 		"radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(0,0,0,0.9640231092436975) 83%)",
		// 	backgroundPosition:
		// 		!!cursorPosition.x && !!cursorPosition.y
		// 			? `${cursorPosition.x}px ${cursorPosition.y}px`
		// 			: "center",
		// 	backgroundRepeat: "no-repeat",
		// 	backdropFilter: "blur(2px)",
		// },
		fontWeight: 600,
		fontSize: "1.5em",
	}));

	const mouseMoveHandler = (e) => {
		const { clientX, clientY, target } = e;
		let rect = target.getBoundingClientRect();
		let { top, left, width, height } = rect;
		let x = clientX - left - width / 2; //x position within the element.
		let y = clientY - top - height / 2; //y position within the element.
		console.log(e);
		setCursorPosition({ x, y });
	};
	return (
		<div className={Classes.container}>
			<StyledLinkComp onMouseMove={mouseMoveHandler} className={Classes.Link}>
				<Link href={passedHref}>{children}</Link>
				{/* <Box className={Classes.glossyBox}></Box> */}
			</StyledLinkComp>
			<div className={Classes.StyledLink}></div>
		</div>
	);
}

export default StyledLink;
