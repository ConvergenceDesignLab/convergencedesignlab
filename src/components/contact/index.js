import React from "react";
import classNames from "classnames";
import TextareaAutosize from "react-autosize-textarea";
import CoverImage from "../cover-image/";
import style from "./index.module.scss";
import image from "../../assets/images/tilden-hands-cropped.png";

export default function About() {
  return (
    <div>
      <CoverImage src={image} className={style.cover} />

      <div className="container">
        <div className={style.section}>
          <div className={style.title}>Say Hello</div>
          <div className={style.content}>
            <p>
              Need a thought partner? Want to team up? Or, just want to chat over coffee? Reach out.
            </p>
            <div className={style.contact}>
              <div>312.369.8883</div>
              <div>hello@convergencedesignlab.org</div>
            </div>
          </div>
        </div>
      </div>

      <div className={style.isOrange}>
        <div className="container">
          <div className={style.section}>
            <div className={style.title}>Drop a Line</div>
            <div className={style.content}>
              <form className={style.form} action="">
                <label className={style.formBlock}>
                  <div className={style.formLabelName}>Name</div>
                  <div className={style.formLabelExplanation}>What should we call you?</div>
                  <input
                    className={style.formInput}
                    name="name"
                    type="text"
                    placeholder="Your Name"
                  />
                </label>
                <label className={style.formBlock}>
                  <div className={style.formLabelName}>Email</div>
                  <div className={style.formLabelExplanation}>How can we reach you?</div>
                  <input
                    className={style.formInput}
                    name="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </label>
                <label className={style.formBlock}>
                  <div className={style.formLabelName}>Subject</div>
                  <div className={style.formLabelExplanation}>What do you want to talk about?</div>
                  <select className={style.formInput} name="subject">
                    <option value="partner">I'd like to partner with you</option>
                    <option value="advice">I'm looking for some advice</option>
                    <option value="collaborate">I want to collaborate with you</option>
                    <option value="chat">I'd just like to chat</option>
                    <option value="something-else">Something else</option>
                  </select>
                </label>
                <label className={style.formBlock}>
                  <div className={style.formLabelName}>Message</div>
                  <div className={style.formLabelExplanation}>What do you want to say?</div>
                  <TextareaAutosize
                    className={style.formInput}
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    maxRows={25}
                  />
                </label>

                <input disabled className={style.formSubmit} type="submit" value="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={style.section}>
          <div className={style.title}>Stop By</div>
          <div className={style.content}>
            <div className="font-weight-700">Convergence Design Lab</div>
            <div>Columbia College Chicago</div>
            <div>33 East Congress, Suite 600</div>
            <div>Chicago, IL 60605</div>
            <a href="https://goo.gl/maps/drufjZexbpQ2">Directions</a>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.815526331541!2d-87.628654984559!3d41.875315279222306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca2828800d1%3A0xe51126d097f1e665!2s33+E+Congress+Pkwy+%23600%2C+Chicago%2C+IL+60605!5e0!3m2!1sen!2sus!4v1527177735863"
              frameBorder="0"
              className={style.map}
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
