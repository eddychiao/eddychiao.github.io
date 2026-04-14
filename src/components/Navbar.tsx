import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import "./Navbar.css";
import { Theme } from "../context/ThemeContext";

interface NavbarProps {
	theme: Theme;
}

const navLinks = [
	{ label: "Home", path: "/" },
	{ label: "About", path: "/about" },
	{ label: "Projects", path: "/projects" },
	{
		label: "Photography",
		path: "https://eddychiao.github.io/etc_photo",
		external: true,
	},
	{
		label: "Résumé",
		path: "/files/Resume_EdwardChiao_2026.pdf",
		external: true,
	},
	{ label: "Contact", path: "/contact" },
];

const Navbar: React.FC<NavbarProps> = ({ theme }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [colorIndex, setColorIndex] = useState(0);
	const indexRef = useRef(0);
	const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

	const handleBrandMouseEnter = () => {
		indexRef.current = 1;
		setColorIndex(1);
		intervalRef.current = setInterval(() => {
			indexRef.current = (indexRef.current + 1) % 3;
			setColorIndex(indexRef.current);
		}, 500);
	};

	const handleBrandMouseLeave = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
			intervalRef.current = null;
		}
		indexRef.current = 0;
		setColorIndex(0);
	};

	useEffect(() => {
		indexRef.current = 0;
		setColorIndex(0);
	}, [theme]);

	const handleClick = (link: (typeof navLinks)[0]) => {
		if (link.external) {
			window.open(link.path, "_blank");
		} else {
			navigate(link.path);
		}
	};

	const isActive = (link: (typeof navLinks)[0]) =>
		!link.external && location.pathname === link.path;

	return (
		<nav className="Navbar" style={{ backgroundColor: theme.backgroundColor }}>
			<span
				className="Navbar-brand"
				style={{
					color: [theme.headerColor, theme.textColor, theme.buttonColor][
						colorIndex
					],
				}}
				onClick={() => navigate("/")}
				onMouseEnter={handleBrandMouseEnter}
				onMouseLeave={handleBrandMouseLeave}>
				etc.
			</span>

			<div className="Navbar-links">
				{navLinks.map((link) => (
					<button
						key={link.label}
						className={`Navbar-link${isActive(link) ? " active" : ""}`}
						onClick={() => handleClick(link)}
						style={{
							color: isActive(link) ? theme.headerColor : theme.textColor,
						}}>
						{link.label}
						{link.external && (
							<NorthEastRoundedIcon
								sx={{ fontSize: "0.65rem", ml: "2px", opacity: 0.7 }}
							/>
						)}
					</button>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
