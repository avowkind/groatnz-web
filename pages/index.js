import Menu from '../components/Menu'
import Panel from '../components/panel'


const Base = () => 
<>
<header>
  <div className="container">
    

    <div className="row">    
      <div className="twelve columns">
        <h1>Andrew Watkins <br></br><small>Code &#x2723; Software Design &#x2723; Full Stack &#x2723; Data Science</small></h1>
        <h4>Science solutions designer and product development. Guiding researchers from lab concept to production systems. </h4>
        <h4>
          30+ years of Python, Javascript, C/C++ across science, medicine, engineering, process control, mobile, 
          including sensor networks, SCADA, Data acquisition, Analysis, &amp; Visualisation. 
        </h4>
        <a href="mailto:andrew@groat.nz" className="btn-gold">Contact me</a> 
        <p>&nbsp;</p>
      </div>
    </div>
  </div>
</header>

<section className="services">
  <div className="container">
    <div className="row">
      <div className="twelve columns">
        <h3>Expertise</h3>
      </div>
    </div>
    <div className="row">
      <Panel href="/tech-skills" title="Software Development">
          <p>Full stack web applications with HTML/CSS, React/Node/Javascript, Python and other modern languages. </p>
          <p>Web UI, APIs, security, identity management, backend, database (MongoDB & SQL), Dev/Ops, Docker, AWS cloud</p>
      </Panel>
      <Panel href="/mgt-skills" title="Systems &amp; Business Analysis">
          <p>Experience understanding science requirements and goals and translating into advanced technology.</p>
          <p>Design and development of scalable multi-service architectures deployed to HPC, Clusters or Cloud.</p>
      </Panel>
    </div>
    <div className="row">
      <Panel href="#" title="Data Acquisition and Control">
          <p>Sensor Networks, Data Loggers, SCADA, Instruments, Control systems.</p>
          <p>Internet of Things (IoT), Telemetry</p>
      </Panel>
      <Panel href="#" title="Science Data Management">
          <p>Schema design, Metadata Records, GIS, Pipelines, Open Data, Analytics, Visualisation, </p>
          <p>FAIR &amp; CARE Principles</p>
      </Panel>
    </div>
  </div>
</section>

<section className="about">
  <div className="container">
    <div className="row">
      <div className="twelve columns">
        <h3>About Andrew</h3>
      </div>
    </div>
    <div className="row bottom">
      <div className="two-thirds column">
      <ul>
        <li>I design and write software to solve real world problems.</li>
        <li>I listen and focus on your needs and help guide you through the stages 
          that take an idea from conception to realisation</li>
        <li>I specialise in the challenges facing scientists and researchers having 
          worked with multiple research organisations including NIWA, Plant and Food, and the University of Auckland.</li>
        <li>I have run my own company and led a start-up mobile phone company software team through a high growth period. </li>
        <li>I have created and developed multiple agile cross-functional teams and led a major open-source project with hundreds of contributors.</li>
        <li>I now work from my home on Waiheke Island and focus on
          projects for environmental science and social well being. </li>
        <li>I am available for mentoring of software developers 
          and research software engineers.</li>
        <li>I give talks and run workshops on various technologies.</li>
        <li>When not coding I sing and act with the local theatre company.</li>
      </ul>
      </div>
      <div className="one-third column">
        <h4>Education</h4>
        <ul>
          <li>BSc Combined Honours, Computer Science &amp; Geology</li>
        </ul>
        <h4>Key Roles</h4>
          <ul>
            <li>Systems Development Manager and GM IT - NIWA</li>
            <li>Technology Consultant - Plant and Food Research</li>
            <li>Technical Lead - Voluntarily.nz</li>
          </ul>
        <h4>Resume</h4>
          <ul>
          <li><a href="https://www.linkedin.com/in/andrewwatkinsnz/" >LinkedIn</a></li>
          </ul>
        <h4>Some Code</h4>
          <ul>
          <li><a href="https://github.com/voluntarily/vly2" >Voluntarily.nz</a></li>
          <li><a href="https://github.com/groatnz" >Groat.nz</a></li>
          <li><a href="https://github.com/avowkind" >avowkind</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>

</>

export default Base
