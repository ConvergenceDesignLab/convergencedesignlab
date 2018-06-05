import React from "react";
import classNames from "classnames";
import CoverImage from "../cover-image/";
import CallToAction from "../call-to-action/";
import Team from "./team/";
import style from "./index.module.scss";
import image from "../../assets/images/da-opening-cropped.png";
import placeholderImage from "../../assets/images/placeholder.png";
import designProcessImage from "../../assets/images/placeholder-design-cycle.png";

export default function About() {
  return (
    <div>
      <CoverImage src={image} className={style.cover} />

      <div className="container">
        <div className={style.section}>
          <div className={style.sectionTitle}>About Us</div>
          <div className={classNames(style.content, style.col)}>
            <div className={style.contentTitle}>
              We are an applied research center and learning design studio.
            </div>
            <div className={style.contentText}>
              <p>
                Convergence Design Lab is an applied research center and a learning design studio.
                We partner with organizations to prepare youth to become future-ready, media fluent
                and active participants in public life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.isOrange}>
        <div className="container">
          <div className={style.section}>
            <div className={classNames(style.sectionTitle, style.sectionTitleAlt)}>The Theory</div>
            <div className={classNames(style.content, style.col)}>
              <div className={style.contentTitle}>
                Our work is grounded in years of applied research.
              </div>
              <div className={style.contentText}>
                <p>
                  Brownie tart jelly gummies cake. Pudding cheesecake cake halvah chupa chups.
                  Cheesecake caramels muffin bear claw sesame snaps candy canes donut tart.
                  Chocolate cake pastry toffee sugar plum macaroon oat cake marzipan tiramisu wafer.
                  Topping gummies chocolate bar marzipan ice cream.
                </p>
                <p>
                  Cake jelly beans marshmallow toffee. Jelly beans pie brownie biscuit. Brownie
                  wafer marzipan bear claw bear claw candy gummi bears lollipop halvah.
                </p>
              </div>
            </div>
            <div className={style.colImage}>
              <img className="max-width-100" src={placeholderImage} alt="Placeholder" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={style.section}>
          <div className={style.sectionTitle}>Our Process</div>
          <div className={classNames(style.content, style.col)}>
            <div className={style.contentTitle}>
              Brownie tart jelly gummies cake, pudding cheesecake.
            </div>
            <div className={style.contentText}>
              <p>
                Gummi bears chocolate pastry wafer croissant cotton candy. Bonbon jujubes pie icing
                candy canes. Chocolate cake croissant dessert sweet roll brownie dragée. Dragée
                cookie gummi bears cupcake.
              </p>
              <p>
                Jelly sweet dragée apple pie pie powder toffee fruitcake. Gummies ice cream candy
                macaroon jelly beans candy canes sweet roll brownie marzipan. Pudding gingerbread
                biscuit lollipop cake bonbon cotton candy cake.
              </p>
            </div>
          </div>
          <div className={style.designImage}>
            <img className="width-100" src={designProcessImage} alt="Placeholder" />
          </div>
        </div>
      </div>

      <div className={style.isOrange}>
        <div className="container">
          <div className={style.section}>
            <div className={style.sectionTitle}>The Team</div>
            <div className={classNames(style.content, style.col)}>
              <div className={style.contentTitle}>
                We are a team of learning designers, researchers and creative technologists.
              </div>
            </div>
            <Team />
          </div>
        </div>
      </div>

      <CallToAction title="Want to partner with us?" />
    </div>
  );
}
