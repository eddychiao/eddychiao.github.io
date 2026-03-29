import React from "react";
import "./Projects.css";
import { Theme } from "../context/ThemeContext";
import useTypingAnimation from "../hooks/useTypingAnimation";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../const/projectdata";

interface ProjectsProps {
	theme: Theme;
}

const TITLE = "Projects";

const Projects: React.FC<ProjectsProps> = ({ theme }) => {
	const { typed, done } = useTypingAnimation(TITLE, 75);

	return (
		<div
			className="Projects"
			style={{ backgroundColor: theme.backgroundColor }}>
			{/* ── Header ─────────────────────────────────────────────── */}
			<div className="Projects-header-section">
				<div
					className="Projects-title"
					style={{ color: theme.headerColor, position: "relative" }}>
					<span className="Projects-ghost">{TITLE}</span>
					<span className="Projects-typed">
						{typed}
						{!done && (
							<span
								className="Projects-cursor"
								style={{ color: theme.headerColor }}>
								|
							</span>
						)}
					</span>
				</div>
				<div
					className="Projects-divider"
					style={{ backgroundColor: theme.buttonColor }}
				/>
				<div
					className="Projects-description"
					style={{ color: theme.textColor }}>
					A collection of things I've built over the years: personal projects,
					hackathons, and various other random ventures.
				</div>
			</div>

			{/* ── Grid ───────────────────────────────────────────────── */}
			<div className="Projects-grid">
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} theme={theme} />
				))}
			</div>
		</div>
	);
};

export default Projects;
