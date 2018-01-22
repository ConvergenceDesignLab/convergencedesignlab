import React from "react";

const partners = [
  {
    link: "http://www.thealliance.media/",
    image: require("../../assets/images/partner-logos/alliance.png"),
    name: "The Alliance for Media Arts & Culture"
  },
  {
    link: "https://archeworks.org/",
    image: require("../../assets/images/partner-logos/archeworks.png"),
    name: "Archeworks"
  },
  {
    link: "https://cyber.harvard.edu/",
    image: require("../../assets/images/partner-logos/berkman.png"),
    name: "Berkman Klein Center for Internet & Society at Harvard University"
  },
  {
    link: "https://www.discoverdesign.org/",
    image: require("../../assets/images/partner-logos/caf-dd.png"),
    name: "Chicago Architecture Foundation Discover Design"
  },
  {
    link: "http://cct.org/",
    image: require("../../assets/images/partner-logos/chicago-community-trust.png"),
    name: "Chicago Community Trust"
  },
  {
    link: "https://www.chicagoculturalalliance.org/",
    image: require("../../assets/images/partner-logos/chicago-cultural-alliance.png"),
    name: "Chicago Cultural Alliance"
  },
  {
    link: "http://www.chiyouthvoices.net/",
    image: require("../../assets/images/partner-logos/chicago-youth-voices-network.png"),
    name: "Chicago Youth Voices Network"
  },
  {
    link: "http://cps.edu/Pages/home.aspx",
    image: require("../../assets/images/partner-logos/cps.png"),
    name: "Chicago Public Schools"
  },
  {
    link: "https://www.ed.gov/",
    image: require("../../assets/images/partner-logos/department-of-education.png"),
    name: "Department of Education"
  },
  {
    link: "https://www.forallsystems.com/",
    image: require("../../assets/images/partner-logos/for-all-systems.png"),
    name: "For All Systems"
  },
  {
    link: "https://freespiritmedia.org/",
    image: require("../../assets/images/partner-logos/free-spirit.png"),
    name: "Free Spirit Media"
  },
  {
    link: "https://www.participate.com/",
    image: require("../../assets/images/partner-logos/participate.png"),
    name: "Participate"
  },
  {
    link: "https://hivechicago.org/",
    image: require("../../assets/images/partner-logos/hive.png"),
    name: "Hive"
  },
  {
    link: "https://www.lrng.org/",
    image: require("../../assets/images/partner-logos/lrng.png"),
    name: "LRNG"
  },
  {
    link: "https://www.macfound.org/",
    image: require("../../assets/images/partner-logos/macarthur-foundation.jpg"),
    name: "MacArthur Foundation"
  },
  {
    link: "https://www.mccormickfoundation.org/",
    image: require("../../assets/images/partner-logos/mccormick-foundation-logo.png"),
    name: "McCormick Foundation"
  },
  {
    link: "https://www.generationallchicago.org/",
    image: require("../../assets/images/partner-logos/generation-all.png"),
    name: "Generation All"
  },
  {
    link: "http://www.paragoninc.com/",
    image: require("../../assets/images/partner-logos/paragon.png"),
    name: "Paragon"
  },
  {
    link: "https://www.playgroundcity.org/",
    image: require("../../assets/images/partner-logos/playground-city.png"),
    name: "Playground City"
  },
  {
    link: "https://spyhop.org/",
    image: require("../../assets/images/partner-logos/spy-hop.png"),
    name: "Spy Hop"
  },
  {
    link: "http://www.smartchicagocollaborative.org/",
    image: require("../../assets/images/partner-logos/smart-chicago.png"),
    name: "Smart Chicago"
  }
];

export default function Partners() {
  return (
    <div className="subtle-background">
      <div className="container partners-section">
        <div className="section">
          <h1 className="title">Our Clients & Partners</h1>
          <p>We work with...</p>
          <div className="row--justify-center clients-grid">
            {partners.map(({ link, image, name }) => (
              <div key={name} className="col">
                <a className="clients-grid__link" href={link}>
                  <img className="clients-grid__image" src={image} alt={name} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
