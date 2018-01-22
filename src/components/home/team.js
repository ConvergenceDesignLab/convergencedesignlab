import React from "react";

const staff = [
  {
    name: "Mindy Faber",
    image: require("../../assets/images/team/mindy-faber.jpg"),
    title: "Director",
    email: "mfaber@colum.edu",
    twitter: "https://twitter.com/mindyfaber",
    linkedin: "https://www.linkedin.com/in/mindy-faber-4366025"
  },
  {
    name: "Margaret Conway",
    image: require("../../assets/images/team/margaret-conway.jpg"),
    title: "Learning Experience Designer",
    email: "mconway@colum.edu",
    twitter: "https://twitter.com/margaretkconway",
    linkedin: "https://www.linkedin.com/in/margaret-conway-a719519"
  },
  {
    name: "Eric Freedman",
    image: require("../../assets/images/team/eric-freedman.jpg"),
    title: "Dean of the Media School",
    email: "efreedman@colum.edu",
    twitter: "https://twitter.com/ericmfreedman",
    linkedin: "https://www.linkedin.com/in/erfreedman"
  },
  {
    name: "Michael Hadley",
    image: require("../../assets/images/team/mike-hadley-alt.jpg"),
    title: "Learning Experience Developer",
    email: "mhadley@colum.edu",
    twitter: "https://twitter.com/mikewesthad",
    linkedin: "https://www.linkedin.com/in/michaelwesthadley"
  }
];

const researchers = [
  {
    name: "Natalia Smirnov",
    image: require("../../assets/images/team/natalia-smirnov-square.jpg"),
    title: "Research Fellow",
    twitter: "https://twitter.com/marginatalia?lang=en",
    linkedin: "https://www.linkedin.com/in/nataliasmirnov"
  },
  {
    name: "Jabaru Evans",
    image: require("../../assets/images/team/jabari-evans-square.jpg"),
    title: "Research Fellow",
    twitter: "https://twitter.com/naledgeevans?lang=en",
    linkedin: "https://www.linkedin.com/in/naledge-jabari-evans-msw-04433660/"
  },
  {
    name: "Virginia Killian Lund",
    image: require("../../assets/images/team/virigina-lund-square.jpg"),
    title: "Research Fellow",
    twitter: "https://twitter.com/virginiaklund",
    linkedin: "https://www.linkedin.com/in/virginia-killian-lund-b9b393a"
  }
];

const students = [
  {
    name: "Nina Sitara",
    image: require("../../assets/images/team/placeholder-1.jpg"),
    title: "Student Fellow",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Casey Potter",
    image: require("../../assets/images/team/placeholder-2.jpg"),
    title: "Student Fellow",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Jonathan	Miller",
    image: require("../../assets/images/team/placeholder-3.jpg"),
    title: "Student Fellow",
    twitter: "#",
    linkedin: "#"
  },
  {
    name: "Lisa	Long",
    image: require("../../assets/images/team/placeholder-4.jpg"),
    title: "Student Fellow",
    twitter: "#",
    linkedin: "#"
  }
];

const TeamMember = ({ image, name, title, email, twitter, linkedin }) => (
  <figure className="team-member col--xs-6 col--sm-3">
    <img className="team-member__picture" src={image} alt={name} />
    <figcaption>
      <div className="team-member__name">{name}</div>
      <div className="team-member__title">{title}</div>
      <div className="social-links display-none--xs-down">
        {email && (
          <a href={`mailto:${email}`}>
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-envelope icon-foreground" />
            </span>
          </a>
        )}
        {twitter && (
          <a href={twitter}>
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-twitter icon-foreground" />
            </span>
          </a>
        )}
        {linkedin && (
          <a href={linkedin}>
            <span className="stacked-icon">
              <i className="fa fa-circle icon-background" />
              <i className="fa fa-linkedin icon-foreground" />
            </span>
          </a>
        )}
      </div>
    </figcaption>
  </figure>
);

export default function Team() {
  return (
    <div className="subtle-background">
      <div className="container team-section">
        <div className="section">
          <h1 className="title">Our Team</h1>

          <div className="team-block">
            <h2>Staff</h2>
            <div className="row--justify-center">
              {staff.map(({ name, image, title, email, twitter, linkedin }) => (
                <TeamMember
                  key={name}
                  name={name}
                  image={image}
                  title={title}
                  email={email}
                  twitter={twitter}
                  linkedin={linkedin}
                />
              ))}
            </div>
          </div>

          <div className="team-block">
            <h2>Research Team</h2>
            <div className="row--justify-center">
              {researchers.map(({ name, image, title, twitter, linkedin }) => (
                <TeamMember
                  key={name}
                  name={name}
                  image={image}
                  title={title}
                  twitter={twitter}
                  linkedin={linkedin}
                />
              ))}
            </div>
          </div>

          <div className="team-block">
            <h2>Student Fellows</h2>
            <div className="row--justify-center">
              {students.map(({ name, image, title, twitter, linkedin }) => (
                <TeamMember
                  key={name}
                  name={name}
                  image={image}
                  title={title}
                  twitter={twitter}
                  linkedin={linkedin}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
