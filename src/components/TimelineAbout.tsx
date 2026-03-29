import React from "react";
import "./TimelineAbout.css";
import { Theme } from "../context/ThemeContext";
import TagPill from "./TagPill";

type EntryType = "education" | "professional experience" | "internship";

interface TimelineEntry {
	year: string;
	title: string;
	subtitle: string;
	type: EntryType;
	logo?: string;
	logoHeight?: string;
}

const yearsInRole = (year: string): string | null => {
	const [start, end] = year.split("-").map(Number);
	if (!start || !end) return null;
	return String(end - start);
};

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
		))}
	</div>
);

export default TimelineAbout;
