/**
 * Each team member contains:
 *  name - text to be displayed in the Team section
 *  bio - the component that contains the content of their bio
 *  image - the name of the image file (without path), used to match data here with GraphQL results
 *  email - the contact address
 *  twitter - link to twitter profile
 *  linkedin - link to linkedin profile
 */
const team = [
  {
    name: "Eric Freedman, Ph.D.",
    bio: require("./bios/eric-freedman"),
    image: "eric-freedman.jpg",
    title: "Dean of the School of Media Arts",
    email: "efreedman@colum.edu",
    twitter: "https://twitter.com/ericmfreedman",
    linkedin: "https://www.linkedin.com/in/erfreedman"
  },
  {
    name: "Mindy Faber",
    bio: require("./bios/mindy-faber"),
    image: "mindy-faber.png",
    title: "Program Director",
    email: "mfaber@colum.edu",
    twitter: "https://twitter.com/mindyfaber",
    linkedin: "https://www.linkedin.com/in/mindy-faber-4366025"
  },
  {
    name: "Margaret Conway",
    bio: require("./bios/margaret-conway"),
    image: "margaret-conway.jpg",
    title: "Program Manager",
    email: "mconway@colum.edu",
    twitter: "https://twitter.com/margaretkconway",
    linkedin: "https://www.linkedin.com/in/margaret-conway-a719519"
  },
  {
    name: "Michael Hadley",
    bio: require("./bios/michael-hadley"),
    image: "mike-hadley-alt.jpg",
    title: "Learning Product Developer",
    email: "mhadley@colum.edu",
    twitter: "https://twitter.com/mikewesthad",
    linkedin: "https://www.linkedin.com/in/michaelwesthadley"
  },
  {
    name: "Yonty Friesem",
    bio: require("./bios/yonty-friesem"),
    image: "yonty-friesem.jpg",
    title: "Associated Faculty",
    twitter: "https://twitter.com/yonty",
    linkedin: "https://www.linkedin.com/in/yonty"
  },
  {
    name: "Jabari Evans",
    bio: require("./bios/jabari-evans"),
    image: "jabari-evans-square.jpg",
    title: "Research Associate",
    twitter: "https://twitter.com/naledgeevans?lang=en",
    linkedin: "https://www.linkedin.com/in/naledge-jabari-evans-msw-04433660/"
  },
  {
    name: "Lorelei Miyamura",
    bio: require("./bios/lorelei-miyamura"),
    image: "lorelei-miyamura.png",
    title: "Interaction Design Assistant",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/lorelei-miyamura/"
  },
  {
    name: "Virginia Killian Lund",
    bio: require("./bios/virginia-lund"),
    image: "virigina-lund-square.jpg",
    title: "Research Associate",
    twitter: "https://twitter.com/virginiaklund",
    linkedin: "https://www.linkedin.com/in/virginia-killian-lund-b9b393a"
  },
  {
    name: "Jacob Watson",
    bio: require("./bios/jacob-watson"),
    image: "jacob-watson.jpg",
    title: "Research Associate",
    twitter: "https://twitter.com/jacobcwatson?lang=en"
  },
  {
    name: "Serene Alene",
    bio: require("./bios/serene-alene"),
    image: "serene-alene.jpg",
    title: "Graduate Assistant"
  }
];

export default team;
