import React from "react";
import "./ProjectDetail.css";
import { Theme } from "../context/ThemeContext";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../const/projectdata";
import TagPill from "../components/TagPill";
import { techMap } from "../components/TechStack";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import NorthEastRoundedIcon from "@mui/icons-material/NorthEastRounded";

interface ProjectDetailProps {
	theme: Theme;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ theme }) => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const project = projects.find((p) => p.id === id);

	if (!project) {
		return (
			<div
				className="ProjectDetail ProjectDetail--notfound"
				style={{
					backgroundColor: theme.backgroundColor,
					color: theme.textColor,
				}}>
				<p>Project not found.</p>
				<button
					className="ProjectDetail-back"
					style={{ color: theme.headerColor }}
					onClick={() => navigate("/projects")}>
					← Back to Projects
				</button>
			</div>
		);
	}

	return (
		<div
			className="ProjectDetail"
			style={{ backgroundColor: theme.backgroundColor }}>
			<button
				className="ProjectDetail-back"
				style={{ color: theme.headerColor }}
				onClick={() => navigate("/projects")}>
				<ArrowBackRoundedIcon fontSize="small" />
				Projects
			</button>

			<div className="ProjectDetail-year" style={{ color: theme.buttonColor }}>
				{project.year}
			</div>

			<div className="ProjectDetail-title" style={{ color: theme.headerColor }}>
				{project.title}
			</div>

			<div className="ProjectDetail-tags">
				{project.tags.map((tag) => {
					const tech = techMap[tag];
					return (
						<TagPill
							key={tag}
							label={tag}
							color={tech?.color ?? theme.buttonColor}
							Icon={tech?.Icon}
						/>
					);
				})}
			</div>

			{project.link && (
				<a
					className="ProjectDetail-link-btn"
					href={project.link}
					target="_blank"
					rel="noreferrer"
					style={{ color: theme.headerColor, borderColor: theme.headerColor }}>
					View Project
					<NorthEastRoundedIcon sx={{ fontSize: "0.85rem" }} />
				</a>
			)}

			<div
				className="ProjectDetail-divider"
				style={{ backgroundColor: theme.buttonColor }}
			/>

			<div className="ProjectDetail-body" style={{ color: theme.textColor }}>
				{/* Project content goes here */}
				<p>{project.fullDescription}</p>
			</div>
		</div>
	);
};

export default ProjectDetail;
