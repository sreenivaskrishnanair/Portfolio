export default function Article(props) {

    return (
        <article
            id={props.id}
            className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
            style={{ display: "none", backgroundColor: "transparent" }}>

            <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
                <h2 className="major">Lane-Detection</h2>
                <span className="image main"><img src="./images/projects/lane.png" alt="" /></span>
                <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Simple Algortithm for lane detection in any image and videos. Uses pyhton and OpenCV library to implement functionality. Description of algorithm: breaks down video into frames - processes each frame individually. Converts each frame in the image into gray scale - smoothens out the image - uses Hough Transforms for getting egde image. - isolates area of interest (lanes) - averages out the lane lines and demarcates the lane.
            </div>
                <div>
                    <b>Techinal Tools Utilized:</b> <br />
                    <ul>
                        <li>Python: Algorithm was written in python</li>
                        <li>OpenCV library: was utilized for frame by frame image manipulation</li>
                    </ul>
                </div>
            </article>
            <br />
            <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
                <h2 className="major">Social Network</h2>
                <span className="image main"><img src="./images/projects/model.png" alt="" /></span>
                <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Full stack web platform that models social media platforms. Uses the MERN stack model to organize the platform. Full social media user experience with user to user chat, cookies, sessions, user to global feed, selective access, etc.(under-development deployement phase)
            </div>
                <div>
                    <b>Techinal Tools Utilized:</b> <br />
                    <ul>
                        <li>React.js: Front-end UI</li>
                        <li>Express: Back-End business Logic</li>
                        <li>MongoDB: NoSQL database for storing user information</li>
                        <li>Node.js: used to achieve backend implementation</li>
                        <li>Passport.js, MailChimp, etc..... : Several NPM technologies for acheiving full user experience like cookies, session, user to user chat, user to global chat, etc</li>
                    </ul>
                </div>
            </article>
            <br />
            {/* */}
            <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
            <h2 className="major">Cat or not</h2>
            <span className="image main"><img src="./images/projects/cat.png" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Deep learning linear regression Algorithm for detecting if given image is of a cat or not. Takes in a large data set of learning images and decides if the givem image is of a cat or not
            </div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Python: Algorithm was written in python</li>
                <li>Jupyter Notebook: algortim written in jupyter</li>
              </ul>
            </div>
          </article>
          <br />
          <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}>
            <h2 className="major">Farm Data - Analyzer</h2>
            <span className="image main"><img src="./images/projects/farm.png" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
              <b>Java</b> application for conducting analysis on the milk data for several farms across the US. The application takes in milk production data of several farms as a CSV file and conducts analytics. It displays yield, tracks change across time and generates various reports.
            </div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Java 13: Implemented Java Stream to filter and manipulate large data.</li>
                <li>JavaFX : Used to create UI</li>
              </ul>
            </div>
          </article>
          <br />
          <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Personal Website</h2>
            <span className="image main"><img src="./images/projects/website.png" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Personal Portfolio website for displaying projects and provide an easy way to contact me. Implemented a static website using Next.js, Vercel and Prismic. GraphQl used to retrieve data from Prismic. Used SCSS to implement visual effects.
            </div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Next.js: to automate static splitting and rendering</li>
                <li>Graphql: for database queries from Prismic </li>
                <li>React.js</li>
                <li>Prismic: used as a headless CMS</li>
                <li>Vercel: Deployment service</li>
                <li>SCSS: Visual effect rendering</li>
                <li>EmailJS: set up email service</li>
              </ul>
            </div>
          </article>
          <br />

          <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Enigma Machine</h2>
            <span className="image main"><img src="./images/projects/enigma.png" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Implemented the complete enigma machine with full encrypt/decrypt capabilities. Can encrypt message of any length. Can also encrypt/decrypt to several rotor levels. Highly efficient code as it is written in C.
            </div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>C language: Complete machine implemented in C</li>
              </ul>
            </div>
          </article>
          <br />
          <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Memory Allocator</h2>
            <span className="image main"><img src="./images/projects/malloc.png" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Simulated low level implementation of Heap memory Allocator. implementation models malloc(size) in C. Allocates size number of bits of memory on the heap and returns memory address of first useable block. Simulates First - Fit, Worst - Fit and Best - Fit policy of allocation with low to zero fragmentation. Memory coalescing implemented.
            </div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>C language: Allocator implemented in C</li>
              </ul>
            </div>
          </article>
          <br />
          <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Rock Paper Scissor</h2>
            <span className="image main"><img src="./images/projects/bucky.png" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Implemented the classic rock, paper, scissors game on the bucky board. Bucky Board is an arduino based programmable board available to students at UW - Madison. Game logic was implemented for two players. The Boards communicate with each other wirelessly. Implementation in C.
            </div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>C language: game implemented in C</li>
                <li>Bucky Board: Arduino based programmable board.</li>
              </ul>
            </div>
          </article>
          <br />
          <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Data Structures</h2>
            <span className="image main"><img src="./images/projects/data.jpg" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Implemented several data structures as part of programming course. </div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Java: structures implemented in Java</li>
                <li>Data Structures: BSTs, red black tree, hash table, maps, graphs, etc</li>
                <li>Analytics Tools: compared structure efficiencies using Java Mission Control</li>
              </ul>
            </div>
          </article>
          <br />
          <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
            <h2 className="major">Telemetry</h2>
            <span className="image main"><img src="./images/projects/baja.png" alt="" /></span>
            <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
            Helped implement Telementry DAQ system for racing car in the Wisconsin Baja team. DAQs were used to analyze structural stress and strain on the car as it moved through terrain.</div>
            <div>
              <b>Techinal Tools Utilized:</b> <br />
              <ul>
                <li>Telemetry-DAQ system: Analyze stress and strain on chasis frame</li>
                <li>Material science: Performed analytics to decide best materials for chasis and type of moving joints / parts in car.</li>
                <li>Analytics Tools: programmed in C</li>
              </ul>
            </div>
          </article>
          <br />
            {props.first && props.close}
        </article>
    )
}