export default function Article(props) {

    return (
        <article
            id={props.id}
            className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
            style={{ display: "none" }}>
            <h2 className="major">Skills</h2>
            <div>
                <ul>
                    <li><b>Programing Languages: </b>Java, C, C++, SQL, R, JavaScript, python, Dart</li>
                    <li><b>Frameworks: </b>React.js, Express, Node, Next.js, GraphQl, ROS (Robot Operating System in C), MATLAB, Android Visual Studio, Flutter, Solid Work, Octave, Kubernetes (Introductory)</li>
                    <li><b>Databases: </b> Mongo DB(proficient), MySQL(introductory)</li>
                    <li><b>API's: </b> RestAPI</li>
                    <li><b>Platforms: </b> Heroku, Vercel, Postman, Gatsby</li>
                    <li><b>Headless CMS:</b> Prismic, Strapi</li>
                </ul>
            </div>
            {props.first && props.close}
        </article>
    )
}