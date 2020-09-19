
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { RichText } from "prismic-reactjs";
import Avatar from 'react-avatar';

export default function Article(props) {
    console.log(props);

    return(
    <article
      id={props.id}
      className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
      style={{ display: "none", backgroundColor: "transparent" }}
    >
      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `} style={{ display: 'none' }}>
            <h2 className="major">Lane-Detection</h2>
            <span className="image main"><img src="./images/projects/lane.png" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Simple Algortithm for lane detection in any image and videos. Uses pyhton and OpenCV library to implement functionality. Description of algorithm: breaks down video into frames - processes each frame individually. Converts each frame inmage into gray scale - smoothens out the image - uses Hough Transforms for getting egde image. - isolates area of interest (lanes) - averages out the lane lines and demarcates the lane.
            </div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Python: Algorithm was written in python</li>
                <li>OpenCV library: was utilized for frame by frame image manipulation</li>
              </ul>
            </div>
          </article>
    
      
      {props.hasTag && 
      <>
      <div style={{textAlign: "center"}} > <AnchorLink className="noDots" href={props.tag}><img src="/images/invertedArrows.png"/></AnchorLink></div>
      </>
      }

      

    
     {props.close}
      {props.first }
      
    </article>
    )
}