export default function Article(props) {
    return(
    <article
      id={props.id}
      className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
      style={{ display: "none" }}
    >
      <h2 className="major">About Me</h2>
      <span className="image main"><img src="./images/profile.jpg" alt="" /></span>
      <div style={{ textAlign: "justify" }}>
            <ul>
              <li>I’m an undergraduate student at the University of Wisconsin – Madison, double majoring in Computer Science and Computer Engineering. I expect to graduate in Dec 2022.</li>
              <li>I have been learning full-stack web development in the MERN (Mongo Express React Node) stack environment. I have learned numerous real-word problem-solving skills by implementing full-stack web enterprise projects. I am confident that I can make meaningful contributions to your work.</li>
              <li>I am incredibly passionate about solving complicated, real-world problems using the power of deep learning and artificial intelligence. To broaden my knowledge, I have been doing the Deep-Learning.AI course under Dr. Andrew Ng in addition to my college course work. I expect to finish the course by December 2020. Like, Dr. Andrew said, “Artificial Intelligence is the new Electricity.”</li>
            </ul>
          </div>
      {props.first && props.close}
    </article>
    )
}