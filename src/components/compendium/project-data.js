const lxd = "lxd";
const pd = "pd";
const par = "par";

const projects = [
  {
    title: "Workforce Readiness Playlists",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd]
  },
  {
    title: "Youth Expungement Mythbusters",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd, pd]
  },
  {
    title: "Digital Citizenship Playlists",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd, pd]
  },
  {
    title: "Playground City Playlists",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd, pd]
  },
  {
    title: "We Choose to Be Here Report",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [par]
  },
  {
    title: "Civic Engagement Research Project",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [par]
  },
  {
    title: "Connected Classroom Design Studio",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd, pd]
  },
  {
    title: "New Global Citizens",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd]
  },
  {
    title: "Power of Place",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd, pd]
  },
  {
    title: "Discover Design Toolkit",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd, pd]
  },
  {
    title: "Refract",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [par]
  },
  {
    title: "Convergence Academies",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd, pd]
  },
  {
    title: "World Dumpling Fest",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd]
  },
  {
    title: "Activating Culture Conference Workshop",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd, pd]
  },
  {
    title: "Digital Atelier",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [lxd]
  },
  {
    title: "Passion to Purpose PD",
    description: "Meditation hot chicken chia try-hard gastropub subway tile food truck banjo.",
    partners: [],
    tags: [pd]
  }
];

const categorizedProjects = {
  lxd: [],
  pd: [],
  par: []
};

projects.forEach(project => {
  project.tags.forEach(tag => {
    categorizedProjects[tag].push(project);
  });
});

export { projects, categorizedProjects };
