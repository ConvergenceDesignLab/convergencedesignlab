import React from "react";
import classNames from "classnames";
import TextareaAutosize from "react-autosize-textarea";
import get from "lodash.get";
import axios from "axios";
import CoverImage from "../cover-image/";
import style from "./index.module.scss";
import image from "../../assets/images/tilden-hands-cropped.png";

const postUrl = `${process.env.GATSBY_API_URL}/cdl/v1/contact`;
const cdlEmail = "hello@convergencedesignlab.org";
const requireEnabled = true;
const subjectOptions = [
  { value: "Partner with You", text: "I'd like to partner with you" },
  { value: "Looking for Advice", text: "I'm looking for some advice" },
  { value: "Collaborate with You", text: "I want to collaborate with you" },
  { value: "Just Want to Chat", text: "I'd just like to chat" },
  { value: "Unspecified Reason", text: "Something else" }
];

export default class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    subject: subjectOptions[0].value,
    message: "",
    url: "",
    error: null,
    success: null,
    sending: false
  };

  onSubmit = e => {
    e.preventDefault();

    this.setState({ error: null, success: null, sending: true });

    const { name, email, subject, url, message } = this.state;
    axios
      .post(postUrl, { name, email, subject, url, message })
      .then(response => {
        this.setState({
          sending: false,
          success: "Thank you for reaching out! We'll be in touch shortly."
        });
      })
      .catch(error => {
        const missing = get(error, "response.data.data.missing");
        if (missing) {
          // Format a message based on the missing fields from the server
          const missingFormated = missing.join(", ");
          this.setState({
            sending: false,
            error: `Sorry, we're having trouble connecting. You need to fill out your: ${missingFormated}`
          });
        } else {
          // Catch all other errors, like the network going out.
          this.setState({
            sending: false,
            error: `Sorry, we're having trouble connecting. Please try again later, or email us directly at ${cdlEmail}`
          });
        }
      });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { name, email, subject, url, message, error, success, sending } = this.state;

    return (
      <div>
        <CoverImage className={style.cover} sizes={this.props.data.cover.childImageSharp.sizes} />

        <div className="container">
          <div className={style.section}>
            <div className={style.title}>Say Hello</div>
            <div className={style.content}>
              <p>
                Need a thought partner? Want to team up? Or, just want to chat over coffee? Reach
                out.
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
                <form
                  className={style.form}
                  action={postUrl}
                  method="post"
                  onSubmit={this.onSubmit}
                >
                  <label className={style.formBlock}>
                    <div className={style.formLabelName}>Name</div>
                    <div className={style.formLabelExplanation}>What should we call you?</div>
                    <input
                      required={requireEnabled}
                      className={style.formInput}
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={name}
                      onChange={this.onChange}
                    />
                  </label>
                  <label className={style.formBlock}>
                    <div className={style.formLabelName}>Email</div>
                    <div className={style.formLabelExplanation}>How can we reach you?</div>
                    <input
                      required={requireEnabled}
                      className={style.formInput}
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={email}
                      onChange={this.onChange}
                    />
                  </label>
                  <label className={style.formBlock} style={{ display: "none" }}>
                    <div className={style.formLabelName}>Leave this empty</div>
                    <input
                      className={style.formInput}
                      type="text"
                      name="url"
                      value={url}
                      onChange={this.onChange}
                    />
                  </label>
                  <label className={style.formBlock}>
                    <div className={style.formLabelName}>Subject</div>
                    <div className={style.formLabelExplanation}>
                      What do you want to talk about?
                    </div>
                    <select
                      required={requireEnabled}
                      className={style.formInput}
                      name="subject"
                      value={subject}
                      onChange={this.onChange}
                    >
                      {subjectOptions.map(({ value, text }) => (
                        <option key={value} value={value}>
                          {text}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className={style.formBlock}>
                    <div className={style.formLabelName}>Message</div>
                    <div className={style.formLabelExplanation}>What do you want to say?</div>
                    <TextareaAutosize
                      required={requireEnabled}
                      className={style.formInput}
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      maxRows={25}
                      value={message}
                      onChange={this.onChange}
                    />
                  </label>

                  <div>
                    <button disabled={sending} className={style.formSubmit} type="submit">
                      <span>{sending ? "Sending..." : "Send"}</span>
                      {sending && <span className={style.spinner} />}
                    </button>
                  </div>

                  {error && <div className={style.error}>{error}</div>}
                  {success && <div className={style.success}>{success}</div>}
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
              <div>Office of the Dean of the School of Media Arts</div>
              <div>Mail: 600 S Michigan Avenue</div>
              <div>Office: 33 East Congress, Suite 600</div>
              <div>Chicago, IL 60605</div>
              <a className="link" href="https://goo.gl/maps/drufjZexbpQ2">
                Directions
              </a>

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
}
