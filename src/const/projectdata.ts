export interface Project {
	id: string;
	year: string;
	title: string;
	shortDescription: string;
	fullDescription: string;
	tags: string[];
	link?: string;
	image?: string;
}

export const projects: Project[] = [
	{
		id: "jog-log",
		year: "2026",
		title: "Jog Log",
		shortDescription: "A site to track my runs",
		fullDescription:
			"Since I don't want to pay for Strava, I built an app to track my runs as well as set goals for myself. This website's main function is to store my previous runs, and to set goals for myself to reach. There's also a way for me to log my past races/race distances as a record for me to keep improving.",
		tags: ["React", "TypeScript"],
		link: "https://github.com/eddychiao/JogLog",
		image: "/images/projects/joglog.png",
	},
	{
		id: "personal-bookshelf",
		year: "2026",
		title: "Bookshelf",
		shortDescription: "What I've been reading",
		fullDescription: "",
		tags: ["React", "TypeScript"],
	},
	{
		id: "portfolio",
		year: "2025",
		title: "Personal Website",
		shortDescription: "Yer lookin' right at it!",
		fullDescription:
			"I'll gladly spend $10 for a chicken bowl, but the same amount to buy eddychiao.com just seems like too big a commitment for now... This is a project long in the making, made possible by a college homework assignment, a lot of googling images, and the genius of Claude Code. Technically a v2, but I made this site for people curious about me to learn more about me and the work I've done!",
		tags: ["TypeScript", "React", "CSS", "Next.js"],
		link: "https://github.com/eddychiao/eddychiao.github.io",
		image: "/images/projects/portfolio.png",
	},
	{
		id: "wordler",
		year: "2022",
		title: "Wordler",
		shortDescription: "Wordles can be tough to solve...",
		fullDescription:
			"Playing Wordle is just like playing golf: the real game starts when you try to do it in less attempts. After Wordle became all the craze, I became fascinated with the math behind optimizing guesses using information theory. With the help of 3blue1brown, I coded up an application that suggests the best word to guess next given your previous guesses.",
		tags: ["Jupyter Notebook", "Python", "React", "Information Theory"],
		link: "https://github.com/eddychiao/Wordler",
		image: "/images/projects/wordler.png",
	},
	{
		id: "peekaboo",
		year: "2019",
		title: "Peek-a-Boo",
		shortDescription: "A heads-up to put your head-down",
		fullDescription:
			"Project that a few friends and I made at HackGT. React Native application that scrapes recorded jumpscare timestamps from a horror movie database, then sends a notification to the user slightly ahead of time to warn them of what's coming. Jumpscare coming in 3... 2... 1...",
		tags: ["React", "PyTorch", "Flask", "Webscraping"],
		link: "https://github.com/jeremy-zou/Peek-A-Boo",
		image: "/images/projects/peekaboo.png",
	},
	// {
	// 	id: "project-placeholder-4",
	// 	year: "2018",
	// 	title: "Project Title",
	// 	shortDescription: "Placeholder text",
	// 	fullDescription:
	// 		"Short description of what this project does and why it was built. Replace with real content.",
	// 	tags: ["Java", "PostgreSQL", "Docker"],
	// 	link: "https://github.com/eddychiao",
	// 	image: "/images/projects/placeholder.png",
	// },
];
