export default function Article(props) {

  return (


    <article
      id={props.id}
      className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}
      style={{ display: "none", backgroundColor: "transparent" }}>


      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
        <h2 className="major">Research Intern</h2>
        <span className="image main"><img src={require('./images/projects/firefighter.jpeg')} alt="" /></span>
        <div>Directed Research Study under Professor <b><a href="https://pages.cs.wisc.edu/~suman/">Suman Bannerjee</a></b> and Research Assistant
        <b><a href="https://pages.cs.wisc.edu/~hartung/"> Lance Hartung</a></b> with team member <b><a href="https://www.linkedin.com/in/yingze-hou-1630971b1/"> Yingze Hou.</a></b>
        </div>
        <br/>
        <div style={{ textAlign: "justify" }}><b>Main Project Description:</b><br />

        Augmented Reality (AR) assist goggles for firefighters. The goggles would help firefighters navigate rugged, uncertain terrain in low visibility conditions and render a 3D map of the area that other firefighters following them can use. The goggles would highlight exits and fire safety equipment like fire extinguishers in the firefighter's field of vision and save objects of interest in the firefighter's visual field.

        </div>
        <br />
        <div style={{ textAlign: "justify" }}><b>Sub Task (Yingze Hou and I worked on):</b><br />
        Research in computer vision. We designed and trained a neural network from scratch for multi-class semantic segmentation and object recognition. It was inspired by the U-net model neural network. We engaged in data collection, data cleaning, model fitting, model training, model evaluation, and parameter tuning to achieve this (machine learning paradigm).
        </div>

        <br/>
        <div>
          <b>Technical Tools Utilized:</b> <br />
          <ul>
            <li>Python: The Algorithm was written in Python.</li>
            <li>U-net: Inspired Neural Network</li>
            <li>Pytorch: tensor library was Utilized</li>
          </ul>
        </div>
      </article>
      <br />

      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
        <h2 className="major">Engineering Intern</h2>
        <span className="image main"><img src={require('./images/projects/dell2.jpeg')} alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
        Worked alongside Dell associates in an Agile Kanban workflow setting in the Shared Component Office (SCO) of the Infrastructure Solutions Group (ISG). Built the JIRA Integration infrastructure for the SCO portal. It drastically reduced manual labor, eliminated data inconsistencies, and sped up Shared Intellectual Property (SIP) identification throughout DELL/EMC. Got real world Git/Gerrit experience and learned Functional programming and unbundled databases in a limited time frame.
        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
          <ul>
            <li>Clojure (LISP): functional programming language </li>
            <li>JIRA: backend API development</li>
            <li>Unbundled Database: data for SCO portal was stored in unbundled database</li>
            <li>Gerrit: for code quality control</li>
          </ul>
        </div>
      </article>
      <br />


      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
        <h2 className="major">Knights Tour Robot</h2>
        <span className="image main"><img src={require('./images/projects/knightstour.jpg')} alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />

          Application Specific Integrated Circuit (ASIC).
          Designed and developed custom hardware for robot that would perform the knights tour on a chessboard track.
          The hardware was designed to minimize area and maximize response time. The designed was piplined to increase
          instruction throughput. The instruction to perform the Knight's tour was relayed through a bluetooth system, and the
          design was loaded on to a FPGA (50 MHz FPGA (Cyclone IV)).


        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
          <ul>
            <li>ModelSim (Verilog): ModelSim is a multi-language environment by Mentor Graphics, for simulation of hardware description language Verilog</li>
            <li>Mems Gyro: Utilized for maintaining robot orientation</li>
            <li>SPI (Serial Peripheral Interface) protocol: High speed data streaming</li>
            <li>PID (Proportional Integral Derivative) controller: For motor drive</li>

          </ul>
        </div>
      </article>
      <br />

      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
        <h2 className="major">Lane-Detection</h2>
        <span className="image main"><img src={require('./images/projects/lane.png')} alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
          Simple Algorithm for lane detection in any image and videos. Uses Python and OpenCV library to implement the functionality. Description of Algorithm: breaks down the video into frames - processes each frame individually. Converts each frame in the image into grayscale - smoothens out the image - uses Hough Transforms for getting edge image. - isolates the area of interest (lanes) - averages out the lane lines and demarcates the lane
        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
          <ul>
            <li>Python: The Algorithm was written in Python.</li>
            <li>OpenCV library: was utilized for frame by frame image manipulation</li>
          </ul>
        </div>
      </article>
      <br />
      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
        <h2 className="major">Social Network</h2>
        <span className="image main"><img src="./images/projects/model.png" alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
          Full-stack web platform that models social media platforms. Uses the MERN stack model to organize the platform. Full social media user experience with user to user chat, cookies, sessions, the user to global feed, selective access, etc.(under-development deployment phase)
        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
          <ul>
            <li>React.js: Front-End UI</li>
            <li>Redux: (NPM) Global state store</li>
            <li>Express: Back-End business Logic</li>
            <li>MongoDB: NoSQL database for storing user information</li>
            <li>Node.js: Used to achieve backend implementation</li>
            <li>Passport.js, MailChimp, Babel,etc..... : Several NPM technologies for acheiving full user experience like cookies, session, user to user chat, user to global chat, etc</li>
          </ul>
        </div>
      </article>
      <br />
      {/* */}
      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
        <h2 className="major">Cat or not</h2>
        <span className="image main"><img src="./images/projects/cat.png" alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
          Deep learning linear regression Algorithm for detecting if a given image is of a cat or not. Takes in an extensive data set of learning images and decides if the given image is of a cat or not.
        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
          <ul>
            <li>Python: Algorithm was written in python</li>
            <li>Jupyter Notebook: Algortim written in Jupyter</li>
          </ul>
        </div>
      </article>
      <br />

      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
        <h2 className="major">Activity Recognition</h2>
        <span className="image main"><img src={require('./images/projects/template.png')} alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />

          Human Activity Recognition (HAR) project under professor Umit Ogras for class ECE555. Full custom layout of a simple
          neural network. And post layout simulation with parasitics.

        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
          <ul>
            <li>Virtuoso Layout Suite (Cadence): For custom IC layout.</li>
            <li>Verilog: HDL for design specification</li>
          </ul>
        </div>
      </article>
      <br />



      <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}>
        <h2 className="major">Farm Data - Analyzer</h2>
        <span className="image main"><img src="./images/projects/farm.png" alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
          <b>Java</b> application that analyzes the milk data for several farms across the US. The application takes in milk production data of several farms as a CSV file and conducts analytics. It displays yield, tracks change across time, and generate various reports.
        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
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
          <b>Technical Tools Utilized:</b> <br />
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

      <article id="projects" className={`${props.article === props.type ? "active" : ""} ${props.articleTimeout ? "timeout" : ""} `}>
        <h2 className="major">Coding environment</h2>
        <span className="image main"><img src={require('./images/projects/kuber.png')} alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
          Implemented a platformless integrated coding environment hosted on an Amazon Kubernetes cluster. Uses the enterprise implementation of Coder to access the VScode server through any web browser. It is also connected to my Github. It allows me to develop and code on any device with a web browser like iPad, phone, etc without loss of performance capabilities. Also give me an easily accessible server to ssh into.
        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
          <ul>
            <li>Ubuntu: server that hosts files/ allow git connection</li>
            <li>(Enterpirse) Code: allow coding on any browser, by using VScode server.</li>
            <li>VSCode-server: code</li>
            <li>AWS Kubernetes: Host server</li>
            <li>Access control on 134.122.124.136: (level 6 password protected - invisible except for me)</li>
          </ul>
        </div>
      </article>
      <br />

      <article id="projects" className={`${props.article === 'projects' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
        <h2 className="major">Enigma Machine</h2>
        <span className="image main"><img src="./images/projects/enigma.png" alt="" /></span>
        <div style={{ textAlign: "justify" }}><b>Project Description:</b><br />
          Implemented the complete enigma machine with full encrypt/decrypt capabilities. It can encrypt a message of any length. It can also encrypt/decrypt to several rotor levels. Highly efficient code as it is written in C.
        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
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
          Simulated low-level implementation of Heap Memory Allocator. Implementation models malloc(size) in C. Allocates size number of bits of memory on the heap and returns the memory address of the first useable block. Simulates First - Fit, Worst - Fit and Best - Fit policy of allocation with low to zero fragmentation. Memory coalescing implemented.
        </div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
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
          <b>Technical Tools Utilized:</b> <br />
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
          <b>Technical Tools Utilized:</b> <br />
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
          (Learning from team) Helped implement Telementry DAQ system for racing car in the Wisconsin Baja team. DAQs were used to analyze structural stress and strain on the car as it moved through terrain.</div>
        <div>
          <b>Technical Tools Utilized:</b> <br />
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