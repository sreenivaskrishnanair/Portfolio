
import React, { useState } from "react";
import ArticleAbout from "./ArticleAbout";
import ArticleSkills from "./ArticleSkills";
import ArticleProject from "./ArticleProject";
import ArticleCert from "./ArticleCert";

import emailjs from 'emailjs-com'

export default function Main(props) {

  //Email System
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_cadocf7', e.target, 'user_HD5uWoDpA9Ac8SMiij0MV')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    alert("Thank You for contacting me. I will get back to you as soon as possible!");
    e.target.reset();
  }

  let close = (
    multiPaged // if multi page is true include x outside of any articles. Otherwise include on only article
  ) => {
    console.log(multiPaged);
    return (
      <div
        className={multiPaged ? "closePage" : "close"}
        onClick={() => {
          props.onCloseArticle();
        }}
      >
        {" "}
      </div>
    );
  };

  let backHome = () => (
    <div
      className={"closePage"}
      onClick={() => {
        props.onCloseArticle();
      }}
    >
      <a> &larr; Back to home</a>{" "}
    </div>
  );

  const [isFirst, setFirst] = useState(true);

  return (
    <div id="main" style={props.timeout ? { display: "flex" } : { display: "none" }}>
      <div>
        <ArticleAbout
          page={props.aboutPage}
          // page2={props.aboutPage.node}
          type="about"
          article={props.article}
          articleTimeout={props.articleTimeout}
          close={close(false)}
          first={true}
        />

        <ArticleSkills
          page={props.skillsPage}
          type="skills"
          article={props.article}
          articleTimeout={props.articleTimeout}
          first={true}
          close={close(false)}
        />

        <ArticleProject
          page={props.aboutPage}
          // page2={props.aboutPage.node}
          type="projects"
          article={props.article}
          articleTimeout={props.articleTimeout}
          close={close(false)}
          first={true}
        />

        <ArticleCert
          page={props.aboutPage}
          // page2={props.aboutPage.node}
          type="certifications"
          article={props.article}
          articleTimeout={props.articleTimeout}
          close={close(false)}
          first={true}
        />
      </div>

      <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Contact</h2>
        <form onSubmit={sendEmail}>
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" required></textarea>
          </div>
          <ul className="actions">
            <li><input type="submit" value="Send Message" className="special" /></li>
            <li><input type="reset" value="Reset" /></li>
          </ul>
        </form>
        <ul className="icons">
          <li><a href="https://www.linkedin.com/in/sreenivaskrishnanair">
            l<i className="fab fa-linkedin" aria-hidden="true"></i>
          </a></li>
          <li><a href="https://www.instagram.com/sreenivaskrishnanair/">
            <i className="fab fa-instagram-square" aria-hidden="true"></i>
          </a></li>
          <li><a href="https://github.com/sreenivaskrishnanair">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a></li>
        </ul>
        {close(false)}
      </article>
    </div>
  );
}
