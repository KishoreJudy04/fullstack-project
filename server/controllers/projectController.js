exports.getProjects = (req, res) => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      description: "React portfolio project",
      techStack: ["React", "Styled-components", "Node.js"],
      github: "https://github.com/yourname/portfolio",
      demo: "https://yourportfolio.com"
    }
  ];
  res.json(projects);
};
