import React, { useState } from "react";
import "./TimelineAbout.css";
import { Theme } from "../context/ThemeContext";
import TagPill from "./TagPill";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { entries } from "../const/timelinedata";

const yearsInRole = (year: string): string | null => {
	const [start, end] = year.split("-").map(Number);
	if (!start || !end) return null;
	return String(end - start);
};

// ────────────────────────────────────────────────────────────────────────────

const TRANSITION_MS = 260;

const TimelineAbout: React.FC<{ theme: Theme }> = ({ theme }) => {
	const [selected, setSelected] = useState<number | null>(null);
	const [isOpen, setIsOpen] = useState(false);
	const [displayedEntry, setDisplayedEntry] = useState<typeof entries[0] | null>(null);
	const closeTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

	const openPanel = (i: number) => {
		if (closeTimer.current) clearTimeout(closeTimer.current);
		setSelected(i);
		setDisplayedEntry(entries[i]);
		setIsOpen(true);
	};

	const closePanel = () => {
		setIsOpen(false);
		setSelected(null);
		closeTimer.current = setTimeout(() => setDisplayedEntry(null), TRANSITION_MS);
	};

	const handleCardClick = (i: number) => {
		if (selected === i) {
			closePanel();
		} else {
			openPanel(i);
		}
	};

	return (
		<div className="Timeline-container">
			{/* ── Timeline list ── */}
			<div className="Timeline">
				{entries.map((entry, i) => (
					<div className="Timeline-row" key={i}>
						<div className="Timeline-year" style={{ color: theme.headerColor }}>
							{entry.year}
						</div>

						<div className="Timeline-spine">
							<div
								className="Timeline-dot"
								style={{ backgroundColor: theme.buttonColor }}
							/>
							{i < entries.length - 1 && (
								<div
									className="Timeline-line"
									style={{ backgroundColor: theme.buttonColor }}
								/>
							)}
						</div>
						<div
							className={`Timeline-card${selected === i ? " Timeline-card--active" : ""}`}
							style={{
								borderColor: selected === i ? theme.buttonColor : "transparent",
								backgroundColor:
									selected === i ? `${theme.buttonColor}14` : "transparent",
							}}
							onClick={() => handleCardClick(i)}>
							<div className="Timeline-body" style={{ color: theme.textColor }}>
								<div className="Timeline-title">
									{entry.logo && (
										<img
											src={entry.logo}
											alt={entry.title}
											className="Timeline-logo"
											style={
												entry.logoHeight
													? { height: entry.logoHeight }
													: undefined
											}
										/>
									)}
									{entry.title}
								</div>
								<div
									className="Timeline-subtitle"
									style={{ color: theme.headerColor }}>
									{entry.subtitle}
								</div>
								<div className="Timeline-tags">
									<TagPill label={entry.type} color={theme.buttonColor} />
									{entry.type === "professional experience" &&
										yearsInRole(entry.year) && (
											<TagPill
												label={`${yearsInRole(entry.year)} years`}
												color={theme.headerColor}
											/>
										)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* ── Detail panel ── */}
			<div
				className={`Timeline-detail${isOpen ? " Timeline-detail--open" : ""}`}
				style={{
					borderColor: theme.buttonColor + "40",
					backgroundColor: theme.backgroundColor,
					color: theme.textColor,
				}}>
				{displayedEntry && (
					<>
						<button
							className="Timeline-detail-close"
							onClick={closePanel}
							style={{ color: theme.textColor }}
							aria-label="Close">
							<CloseRoundedIcon sx={{ fontSize: "1.1rem" }} />
						</button>

						<div className="Timeline-detail-header">
							{displayedEntry.logo && (
								<img
									src={displayedEntry.logo}
									alt={displayedEntry.title}
									className="Timeline-detail-logo"
									style={
										displayedEntry.logoHeight
											? { height: displayedEntry.logoHeight }
											: undefined
									}
								/>
							)}
							<div
								className="Timeline-detail-title"
								style={{ color: theme.headerColor }}>
								{displayedEntry.title}
							</div>
							<div className="Timeline-detail-subtitle">
								{displayedEntry.subtitle}
							</div>
							<div
								className="Timeline-detail-year"
								style={{ color: theme.buttonColor }}>
								{displayedEntry.year}
							</div>
						</div>

						<div
							className="Timeline-detail-divider"
							style={{ backgroundColor: theme.buttonColor + "50" }}
						/>

						<ul className="Timeline-detail-list">
							{displayedEntry.details.map((point, i) => (
								<li key={i} className="Timeline-detail-text">
									{point}
								</li>
							))}
						</ul>
					</>
				)}
			</div>

			{/* ── Mobile overlay backdrop ── */}
			{displayedEntry && (
				<div className="Timeline-backdrop" onClick={closePanel} />
			)}
		</div>
	);
};

export default TimelineAbout;
