import emailjs from 'emailjs-com'

function sendEmail(e) {
    // alert("Thank You for contacting Sree. He will get back to you as soon as possible!");
    // console.log("hehhehe");
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

export default function Contact(props){
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
            <li>Deep Learning Specialization, Stanford University (Andrew NG) expected-Dec2020</li>
        </ul>
    </div>
    {props.first && props.close}
</article>
}