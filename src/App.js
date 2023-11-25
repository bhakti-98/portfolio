import projects from "./WorkExperienceData.json"
import education from "./EducationData.json"
import './App.css';

function App() {
  return (
    <div className="HomePage">
      <div id="top-bar">
        <a href="#home">Home</a>
        <a href="#research">Research</a>
        <a href="#cv">CV</a>

        <div id="social-icons">
          <a href="https://github.com/your-username" target="_blank"><i class="fab fa-github"></i></a>
          <a href="mailto:your-email@example.com"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      <div id="header">
        <h1>Bhakti Dogra</h1>
        <p className="description">M.A. Economics 2019-21</p>
        <p className="description">B.A. (Honours) Economics 2016-19</p>
      </div>
      <div id="container">
        <div id="content">
          <br />
          <div id="about-me">
            <h2 id="about">About Me</h2>
            <p>Hi, I am a Short-Term Consultant for the Coalition for Disaster Resilient Infrastructure (CDRI) in Delhi, India. I work in the area of disaster risk reduction across energy systems and transportation, primarily focussing on infrastructure resilience and recovery in the face of natural catastrophes. Previously, some of the places I have worked at include Swiss Re, NITI Aayog and Invest India.</p>
            <p>I have a Master’s degree in Economics from Jamia Millia Islamia and a Bachelor’s degree in Economics from College of Vocational Studies, Delhi University. You can also find my CV here.</p>
          </div>
          <br />
          <div id="projects">
            <h2>Education</h2>
            {education.map((item, index) => (
              <div key={index} className="education">
                <h3>{item.degree}</h3>
                <p>
                  {item.institution}<br />
                  Duration: {item.duration}<br />
                  {item.gpa && <span>GPA: {item.gpa} </span>}
                  {item.division && <span>({item.division}) </span>}
                  {item.percentage_best_four && <span>Percentage (Best four subjects): {item.percentage_best_four} </span>}
                  {item.percentage_overall && <span>Percentage (Overall): {item.percentage_overall} </span>}
                </p>
              </div>
            ))}
          </div>
          <br />
        </div>
        <div id="image">
          <div id="image-container">
            <img src="https://i.imgur.com/3kHW7sK.jpg" alt="Your Image" />
          </div>
        </div>
      </div>
      <div id="workcontainer">
        <div id="works-header">
          <h2>Work Experience</h2>
        </div>
      </div>
      <div id="workcontainer">
        <div id="works">
          {projects.map((project, index) => {
            if (index < 4) return (
              <div key={index} className="project">
                <h3>{project.title} - {project.duration}</h3>
                <p>
                  <strong>Responsibilities:</strong> {project.responsibilities.join(', ')}<br />
                  <strong>Role:</strong> {project.role} <br />
                  <strong>Sector/Area(s):</strong> {project.sector_areas.join(', ')} <br />
                  <strong>Location:</strong> {project.location}
                </p>
              </div>
            )
          })}
        </div>
        <br />
        <br />
        <div id="works">
          {projects.map((project, index) => {
            if (index >= 4) return (
              <div key={index} className="project">
                <h3>{project.title} - {project.duration}</h3>
                <p>
                  <strong>Responsibilities:</strong> {project.responsibilities.join(', ')}<br />
                  <strong>Role:</strong> {project.role} <br />
                  <strong>Sector/Area(s):</strong> {project.sector_areas.join(', ')} <br />
                  <strong>Location:</strong> {project.location}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
