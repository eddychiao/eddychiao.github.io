export interface Project {
  id: string;
  year: string;
  title: string;
  shortDescription: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    year: '2025',
    title: 'Personal Portfolio',
    shortDescription:
      'This site — a personal portfolio built with React and TypeScript featuring dynamic theming, an interactive canvas warp effect, and responsive design.',
    tags: ['React', 'TypeScript', 'CSS'],
  },
  {
    id: 'project-placeholder-2',
    year: '2024',
    title: 'Project Title',
    shortDescription:
      'Short description of what this project does and why it was built. Replace with real content.',
    tags: ['Python', 'PyTorch', 'Flask'],
  },
  {
    id: 'project-placeholder-3',
    year: '2023',
    title: 'Project Title',
    shortDescription:
      'Short description of what this project does and why it was built. Replace with real content.',
    tags: ['Java', 'PostgreSQL', 'Docker'],
  },
];
