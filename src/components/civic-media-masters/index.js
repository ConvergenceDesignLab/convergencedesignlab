import React from "react";
import CoverImage from "../cover-image/";
import style from "./index.module.scss";
import image from "../../assets/images/civic-media-masters.jpg";

export default function CivicMediaMasters() {
  return (
    <div>
      <CoverImage src={image} className={style.cover} />

      <div className="container">
        <div className={style.section}>
          <div className={style.title}>Civic Media Masters</div>
          <div className={style.content}>
            <p>
              Columbia College Chicago’s Master of Arts in Civic Media combines media practice and
              community engagement to drive social change. In this three-semester graduate program,
              you’ll work closely with diverse communities to create, design, deploy and assess
              civic media projects that strengthen democratic participation, stimulate community
              action, inform city planning and shape public policy.
            </p>
            <p>
              Join a diverse pool of socially engaged media artists, journalists, civic
              technologists, information designers, urban planners, entrepreneurs and civic-minded
              professionals. You will work collaboratively to design, implement and assess
              project-based solutions that address real community needs.
            </p>
            <p>
              Students and faculty work with Convergence. We foster many of the relationships
              between Columbia and Chicago’s neighborhoods, schools, cultural organizations, and
              civic networks. Through us, students find opportunities to lead applied research
              projects in civic media.
            </p>
            <p>
              You’ll draw on the resources available in Chicago, the nation’s third-largest media
              market, and graduate with a valuable skill set in strategic communications, design
              thinking, collaborative project development, cross-platform storytelling, journalism
              and media, information analysis, data visualization and user-experience design.
              Together, we will transform our communities and our cities.
            </p>
            <a href="https://www.colum.edu/academics/programs/civic-media.html">More Information</a>
          </div>
        </div>
      </div>
    </div>
  );
}
