type EntryType = "education" | "professional experience" | "internship";

export interface TimelineEntry {
	year: string;
	title: string;
	subtitle: string;
	type: EntryType;
	logo?: string;
	logoHeight?: string;
	details: string[];
}

export const entries: TimelineEntry[] = [
	{
		year: "2021-2025",
		title: "Microsoft",
		subtitle: "Software Engineer I → II",
		type: "professional experience",
		logo: "/images/microsoft-icon.svg",
		details: [
			"Worked on the Customer Success Engineering Team as a full-stack software engineer.",
			"Launched an AI-powered analytics tool in M365 Admin Center, enabling analysis of survey feedback on Microsoft products.",
			"Build various features in Microsoft's internal PM portal, which was used to track product feedback",
			"Boosted subscription growth and user engagement of Microsoft Teams features by initiating experimentation.",
			"Constructed scalable data pipelines to track and analyze user feedback and Net Promoter Score (NPS)",
			"Promoted from SWE I to SWE II in 2024.",
		],
	},
	{
		year: "2020-2021",
		title: "Georgia Institute of Technology",
		subtitle: "M.S. in Computer Science (Artificial Intelligence)",
		type: "education",
		logo: "/images/gt_logo.svg",
		details: [
			"Completed a Master's degree with a focus on Artificial Intelligence.",
			"Coursework included Machine Learning, Computational Photography, and Big Data Systems.",
		],
	},
	{
		year: "2020",
		title: "American Express",
		subtitle: "Software Engineer Intern",
		type: "internship",
		logo: "/images/amex_logo.svg",
		logoHeight: "1.6em",
		details: [
			"Interned on the payment cards engineering team.",
			"Built micro-frontend components to modularize the credit cards selection page.",
			"Created a sandbox environment to test out different variation of frontend components.",
		],
	},
	{
		year: "2019",
		title: "Capital One",
		subtitle: "Software Engineer Intern",
		type: "internship",
		logo: "/images/capital_one_logo.svg",
		details: [
			"Interned on the campaign management team in Plano, Texas.",
			"Created a full-stack dashboard system to track the performances of different email campaigns.",
			"Presented findings to the internal data science team.",
			"Used streaming to gather real-time data flow and REST APIs to fetch data shown to clients.",
		],
	},
	{
		year: "2018",
		title: "CodeMettle",
		subtitle: "Software Engineer Intern",
		type: "internship",
		logo: "/images/codemettle_logo.svg",
		details: [
			"Joined a small defense-tech company working on real-time data streaming and shell scripting.",
			"Helped develop front-end components for a situational awareness dashboard.",
			"Gained early exposure to agile workflows and client-facing delivery.",
		],
	},
	{
		year: "2016-2020",
		title: "Georgia Institute of Technology",
		subtitle: "B.S. in Computer Science",
		type: "education",
		logo: "/images/gt_logo.svg",
		details: [
			"Attended Georgia Tech under the Zell Miller and HOPE scholarships.",
			"Threads (sub-concentrations) in Artificial Intelligence and Human-Centered Computing.",
		],
	},
];
