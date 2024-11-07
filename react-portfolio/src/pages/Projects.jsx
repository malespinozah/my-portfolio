import { useState, useEffect } from "react"

export default function Projects(){
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        const getProjects = async () => {
          let response = await fetch("https://my-backend-chi-two.vercel.app/api/projects");
          let data = await response.json();
          // Sort the projects by created date in descending order
          data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setProjects(data);
        }
        getProjects();
      }, []);
    return(
        <main id="main">
            <div className="wrap-projects">
                <h1>My Projects</h1>
                <div className="projects-display">
                    {
                        projects.map((project) => (
                            <div key={project.id} className="project-item">
                                <div className="project-contents">
                                    <div className="project-name">
                                        <h2>{project.name}</h2>
                                    </div>
                                    <div className="project-description">
                                        {project.description}
                                    </div>
                                    <div className="project-github">
                                        <a href={project.github}>Repository in GitHub</a>
                                    </div>
                                    <div className="project-planguages">
                                        <span>{project.programming_languages}</span>
                                    </div>
                                </div>
                                <div className="project-gif">
                                    <img src={project.gif}></img>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}