export default function Article(props) {

    return (
        <article
            id={props.id}
            className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
            style={{ display: "none" }}>
            <h2 className="major">Resume</h2>
           <a href="https://github.com/sreenivaskrishnanair/Resume/blob/master/resume.pdf">erf</a>
          <iframe src="../static/resume.pdf" width="100%" height="740rem" />
            {props.first && props.close}
        </article>
        
    )
}