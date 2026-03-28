import React from "react";
import "./TimelineAbout.css";
import { Theme } from "../context/ThemeContext";

type EntryType = "education" | "professional experience" | "internship";

interface TimelineEntry {
	year: string;
	title: string;
	subtitle: string;
	type: EntryType;
	logo?: string;
	logoHeight?: string;
}

// ── Add / remove entries here ──────────────────────────────────────────────
const entries: TimelineEntry[] = [
	{
		year: "2021-2025",
		title: "Microsoft",
		subtitle: "Software Engineer I → II",
		type: "professional experience",
		logo: "/images/microsoft-icon.svg",
	},
	{
		year: "2020-2021",
		title: "Georgia Institute of Technology",
		subtitle: "M.S. in Computer Science (Artificial Intelligence)",
		type: "education",
		logo: "/images/gt_logo.svg",
	},
	{
		year: "2020",
		title: "American Express",
		subtitle: "Software Engineer Intern",
		type: "internship",
		logo: "/images/amex_logo.svg",
		logoHeight: "1.5em",
	},
	{
		year: "2019",
		title: "Capital One",
		subtitle: "Software Engineer Intern",
		type: "internship",
		logo: "/images/capital_one_logo.svg",
	},
	{
		year: "2018",
		title: "CodeMettle",
		subtitle: "Software Engineer Intern",
		type: "internship",
		logo: "/images/codemettle_logo.svg",
	},
	{
		year: "2016-2020",
		title: "Georgia Institute of Technology",
		subtitle: "B.S. in Computer Science",
		type: "education",
		logo: "/images/gt_logo.svg",
	},
];
// ────────────────────────────────────────────────────────────────────────────

const TimelineAbout: React.FC<{ theme: Theme }> = ({ theme }) => (
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

				<div className="Timeline-body" style={{ color: theme.textColor }}>
					<div className="Timeline-title">
						{entry.logo && (
							<img
								src={entry.logo}
								alt={entry.title}
								className="Timeline-logo"
								style={
									entry.logoHeight ? { height: entry.logoHeight } : undefined
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
					<div
						className="Timeline-tag"
						style={{
							color: theme.buttonColor,
							borderColor: theme.buttonColor,
						}}>
						{entry.type}
					</div>
				</div>
			</div>
		))}
	</div>
);

export default TimelineAbout;
