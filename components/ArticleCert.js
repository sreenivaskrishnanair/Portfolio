export default function Article(props) {

    return (
        <article
            id={props.id}
            className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
            style={{ display: "none" }}>
            <h2 className="major">Certifications</h2>
            <div>
                <ul>
                    <li>SQL, Stanford University (Lagunita)</li>
                    <li>The Complete 2020 Web Development Course (Udemy)</li>
                    <li>The Complete Strapi Course (Udemy)</li>
                    <li>JPMorgan Chase Software Engineering Virtual Experience (Forage)</li>
                    <li>Deep Learning Specialization, Stanford University (Andrew NG) expected-Dec2020</li>
                </ul>
            </div>
            {props.first && props.close}
        </article>

    )
}