import React from "react";

import facilitation from "../../assets/images/icons/facilitation.svg";
import learning from "../../assets/images/icons/learning.svg";
import par from "../../assets/images/icons/par.svg";

export default function VideoBanner() {
  return (
    <div className="container approach-section">
      <div className="section">
        <h1 className="title">Our Approach</h1>
        <h2>Our Purpose</h2>
        <p>
          We work to shift the media and learning landscape so that youth voices and diverse
          communities can participate more equitably in civic, cultural and economic life.
        </p>
        <h2>What We Do</h2>
        <p>
          We work collaboratively to design experiences, tools and strategies that foster
          participation, strengthen media ecosystems, and amplify civic voice.
        </p>

        <div className="services--expanded display-none--xs-down">
          <div className="row">
            <div className="col--xs-4">
              <img className="services__icon" src={facilitation} />
            </div>
            <div className="col--xs-4">
              <img className="services__icon" src={learning} />
            </div>
            <div className="col--xs-4">
              <img className="services__icon" src={par} />
            </div>
          </div>
          <div className="row">
            <h3 className="col--xs-4 services__category">Civic Capacity Building</h3>
            <h3 className="col--xs-4 services__category">Learning Experience Design</h3>
            <h3 className="col--xs-4 services__category">Participatory Action Research</h3>
          </div>
          <div className="row">
            <ul className="col--xs-4 services__list">
              <li>Strategic Planning</li>
              <li>Communities of Practice</li>
              <li>Tools & Platforms</li>
            </ul>
            <ul className="col--xs-4 services__list">
              <li>Playlists & Badging Systems</li>
              <li>Blended Professional Development</li>
              <li>Transformative Learning Spaces</li>
            </ul>
            <ul className="col--xs-4 services__list">
              <li>Actionable Evaluation</li>
              <li>Authentic Assessment</li>
              <li>Engaged Storytelling</li>
            </ul>
          </div>
        </div>

        <div className="services--stacked display-none--sm-up">
          <div className="services__service">
            <img className="services__icon" src={facilitation} />
            <h3 className="services__category">Civic Capacity Building</h3>
            <ul className="services__list">
              <li>Strategic Planning</li>
              <li>Communities of Practice</li>
              <li>Tools & Platforms</li>
            </ul>
          </div>
          <div className="services__service">
            <img className="services__icon" src={learning} />
            <h3 className="services__category">Learning Experience Design</h3>
            <ul className="services__list">
              <li>Playlists & Badging Systems</li>
              <li>Blended Professional Development</li>
              <li>Transformative Learning Spaces</li>
            </ul>
          </div>
          <div className="services__service">
            <img className="services__icon" src={par} />
            <h3 className="services__category">Participatory Action Research</h3>
            <ul className="services__list">
              <li>Actionable Evaluation</li>
              <li>Authentic Assessment</li>
              <li>Engaged Storytelling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
