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
		id: "portfolio",
		year: "2025",
		title: "Personal Portfolio",
		shortDescription: "This website...",
		fullDescription:
			"This site — a personal portfolio built with React and TypeScript featuring dynamic theming, an interactive canvas warp effect, and responsive design.",
		tags: ["React", "TypeScript", "CSS"],
		link: "https://eddychiao.github.io",
		image: "/images/projects/portfolio.png",
	},
	{
		id: "project-peekaboo",
		year: "2022",
		title: "Project Peek-a-Boo",
		shortDescription: "Warns you about upcoming jumpscares",
		fullDescription:
			"Short description of what this project does and why it was built. Replace with real content.",
		tags: ["Python", "PyTorch", "Flask"],
		link: "https://github.com/eddychiao",
		image: "/images/projects/peekaboo.png",
	},
	{
		id: "project-placeholder-3",
		year: "2019",
		title: "Project Title",
		shortDescription: "Placeholder text",
		fullDescription:
			"Short description of what this project does and why it was built. Replace with real content.",
		tags: ["Java", "PostgreSQL", "Docker"],
		link: "https://github.com/eddychiao",
		image: "/images/projects/placeholder.png",
	},
	{
		id: "project-placeholder-4",
		year: "2018",
		title: "Project Title",
		shortDescription: "Placeholder text",
		fullDescription:
			"Short description of what this project does and why it was built. Replace with real content.",
		tags: ["Java", "PostgreSQL", "Docker"],
		link: "https://github.com/eddychiao",
		image: "/images/projects/placeholder.png",
	},
];
