import React, { useRef } from "react";
import useTypingAnimation from "../hooks/useTypingAnimation";
import CameraRoundedIcon from "@mui/icons-material/CameraRounded";
import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";
import { useNavigate } from "react-router-dom";
import "./Home.css";

import * as constants from "../const/enum";
import { Theme } from "../context/ThemeContext";

interface HomeProps {
	theme: Theme;
}

const navItems = [
	{
		label: "About",
		icon: <PersonRoundedIcon fontSize="small" />,
		href: "/about",
	},
	{
		label: "Projects",
		icon: <TerminalRoundedIcon fontSize="small" />,
		href: "/projects",
	},
	{
		label: "Photography",
		icon: <CameraRoundedIcon fontSize="small" />,
		href: "https://eddychiao.github.io/etc_photo",
		external: true,
	},
	{
		label: "Résumé",
		icon: <DescriptionRoundedIcon fontSize="small" />,
		href: "/files/Resume_EdwardChiao_2026.pdf",
		external: true,
	},
	{
		label: "Contact",
		icon: <AlternateEmailRoundedIcon fontSize="small" />,
		href: "/contact",
	},
];

const TITLE = "Hey, I'm Eddy!";
const DESC =
	"I'm a software developer currently based in New York City. I love building all different kinds of cool and fun things with code. Feel free to explore my website to see what I've made!";

const Home: React.FC<HomeProps> = ({ theme }) => {
	const navigate = useNavigate();

	// --- Typing animation ---
	const { typed: titleText, done: titleDone } = useTypingAnimation(TITLE, 75);
	const { typed: descText, done: descDone } = useTypingAnimation(
		DESC,
		15,
		titleDone ? 320 : 999999,
	);

	const darkBackgrounds = [
		constants.colors.katana.backgroundColor,
		constants.colors.dusk.backgroundColor,
		constants.colors.crimson.backgroundColor,
	];
	const isDarkTheme = darkBackgrounds.includes(theme.backgroundColor);

	const handleNavClick = (item: (typeof navItems)[0]) => {
		if (item.external) {
			window.open(item.href, "_blank");
		} else {
			navigate(item.href);
		}
	};

	// --- Tilt interaction refs ---
	const floatRef = useRef<HTMLDivElement>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	const shineRef = useRef<HTMLDivElement>(null);
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = (e.clientX - rect.left) / rect.width; // 0 → 1
		const y = (e.clientY - rect.top) / rect.height; // 0 → 1
		const tiltX = (y - 0.5) * -18;
		const tiltY = (x - 0.5) * 18;

		if (cardRef.current) {
			cardRef.current.style.transition =
				"transform 0.08s ease, box-shadow 0.08s ease";
			cardRef.current.style.transform = `perspective(900px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.04)`;
			cardRef.current.style.boxShadow = `${-tiltY * 2}px ${tiltX * 2}px 50px ${theme.buttonColor}55`;
		}

		if (shineRef.current) {
			shineRef.current.style.opacity = "1";
			shineRef.current.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.18) 0%, transparent 62%)`;
		}
	};

	const handleMouseEnter = () => {
		if (timerRef.current) clearTimeout(timerRef.current);
		if (floatRef.current) floatRef.current.style.animationPlayState = "paused";
	};

	const handleMouseLeave = () => {
		if (timerRef.current) clearTimeout(timerRef.current);

		if (cardRef.current) {
			cardRef.current.style.transition =
				"transform 0.65s ease, box-shadow 0.65s ease";
			cardRef.current.style.transform =
				"perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
			cardRef.current.style.boxShadow = "";
		}

		if (shineRef.current) shineRef.current.style.opacity = "0";

		timerRef.current = setTimeout(() => {
			if (cardRef.current) {
				cardRef.current.style.transition = "";
				cardRef.current.style.transform = "";
			}
			if (floatRef.current)
				floatRef.current.style.animationPlayState = "running";
		}, 680);
	};

	return (
		<div className="Home" style={{ backgroundColor: theme.backgroundColor }}>
			<div className="Home-left">
				<div
					className="Home-title"
					style={{ color: theme.headerColor, position: "relative" }}>
					<span className="Home-ghost">{TITLE}</span>
					<span className="Home-typed">
						{titleText}
						{!titleDone && (
							<span
								className="Home-cursor"
								style={{ color: theme.headerColor }}>
								|
							</span>
						)}
					</span>
				</div>

				<div
					className="Home-divider"
					style={{ backgroundColor: theme.buttonColor }}
				/>

				<div
					className="Home-description"
					style={{ color: theme.textColor, position: "relative" }}>
					<span className="Home-ghost">{DESC}</span>
					<span className="Home-typed">
						{descText}
						{titleDone && !descDone && (
							<span className="Home-cursor" style={{ color: theme.textColor }}>
								|
							</span>
						)}
					</span>
				</div>

				<nav className="Home-nav-list">
					{navItems.map((item) => (
						<button
							key={item.label}
							className="Home-nav-item"
							onClick={() => handleNavClick(item)}
							style={{ color: theme.textColor }}>
							<span
								className="Home-nav-icon"
								style={{ color: theme.buttonColor }}>
								{item.icon}
							</span>
							<span className="Home-nav-label">{item.label}</span>
							{item.external && (
								<span
									className="Home-nav-external"
									style={{ color: theme.buttonColor }}>
									<NorthEastRoundedIcon sx={{ fontSize: "0.75rem" }} />
								</span>
							)}
						</button>
					))}
				</nav>
			</div>

			<div className="Home-right">
				<div
					className="tilt-wrapper"
					onMouseMove={handleMouseMove}
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}>
					{/* float animation layer */}
					<div className="tilt-float" ref={floatRef}>
						{/* tilt + shadow layer */}
						<div className="tilt-card" ref={cardRef}>
							{/* shine overlay */}
							<div className="tilt-shine" ref={shineRef} />
							<img
								src="/images/home_stencil.svg"
								alt="Home Page"
								className="Home-image"
								style={{
									filter: isDarkTheme ? "invert(1)" : "invert(0)",
									pointerEvents: "none",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
