import { useState, useEffect } from "react"

export default function Skills(){
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        const getSkills = async () => {
            const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8888/api";
                
            let response = await fetch(`${apiUrl}/skills`);
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