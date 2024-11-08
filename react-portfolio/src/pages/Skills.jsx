import { useState, useEffect } from "react"

export default function Skills(){
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        const getSkills = async () => {                
            let response = await fetch("https://my-backend-chi-two.vercel.app/api/skills");
            let data = await response.json();
            setSkills(data);
        };
        getSkills();
      }, []);
    return(
        <main id="main">
            <div className="wrap-skills">
                <h1>My Skills</h1>
                <div className="skills-boxes">
                    {
                    skills.map((skill) => (
                        <div key={skill.id} className="skill-item">
                            <div className="skill-img">
                                <img src={skill.url}></img>
                            </div>
                            <div className="skill-name">
                                <h2>{skill.name}</h2>
                            </div>
                            <div className="skill-level">
                                <span>{skill.level}</span>
                            </div>
                    </div>
                    ))
                    }
                </div>
            </div>
            </main>
    )
}