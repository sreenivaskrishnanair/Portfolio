import Head from "next/head";
import stylesheet from "styles/main.scss";
import { getAboutPage, getSkillsPage, getAllProjects, getResume } from "../lib/api"

import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
// You should do that in a Layout file or in `gatsby-browser.js`.


export default function index({ aboutPage, skillsPage, projects, resume }) {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeout] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState("");
  const [loading, setLoading] = useState("is-loading");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading("");
    }, 100);

    if (timer) return () => clearTimeout(timeoutId);
  }, []);

  const handleOpenArticle = (article) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(article);

    setTimeout(() => {
      setTimeout(!timeout);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      setTimeout(!timeout);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle("");
    }, 350);
  };

  return (
    <div className={`body ${loading} ${isArticleVisible ? "is-article-visible" : ""}`}>
      <div>
        <head>
          <title>Sree UW - Madison</title>
          <link href="/images/logo.ico" rel="shortcut icon" />
          <meta property="og:title" content="Sree UW - Madison" />
          <meta property="og:image" content="../public/images/preview.png" />
          <script src="https://kit.fontawesome.com/71759de8ce.js" crossorigin="anonymous"></script>
        </head>

        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <div id="wrapper">
          {/* <a href="http://134.122.124.136:8080" style={{
             position: "absolute",
            top: 10,
            right: 10,
          }}><i className="fas fa-cog" aria-hidden="true"></i></a> */}
          <Header onOpenArticle={handleOpenArticle} timeout={timeout} resume={resume} />
          <Main
            isArticleVisible={isArticleVisible}
            timeout={timeout}
            articleTimeout={articleTimeout}
            article={article}
            onCloseArticle={handleCloseArticle}
            aboutPage={aboutPage}
            skillsPage={skillsPage}
            projects={projects}
          />
          <Footer timeout={timeout} />
        </div>

        <div id="bg" />
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const aboutPage = await getAboutPage();
  const skillsPage = await getSkillsPage();
  const projects = await getAllProjects();
  const resume = await getResume();
  //console.log("skillsPage", skillsPage);


  return {
    props: {
      aboutPage,
      skillsPage,
      projects,
      resume

    },
  };
}