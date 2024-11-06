export default function About(){
    return(
        <main id="main">
            <div className="wrap-about">
                <div className="profile-photo">
                    <img src="/imgs/photo.png" alt="profile" />
                </div>
                <div className="about-info">
                    <h1>I'm Maria Espinoza</h1>
                    <h2>Web Developer</h2>
                    <div className="about-tags">
                        <div># Front-End</div>
                        <div># User-Experience</div>
                        <div># Web-Design</div>
                    </div>
                    <div className="about-box">
                        <div className="about-text">
                            <p>
                            I'm a proactive professional web designer who works with quality and commitment. Quick-learner person always willing to gain experience from each opportunity and taking challenges in web development, especially in Front-End Field in order to cover all the needs the client has. I maximize creativity for commercial purposes.
                            </p>
                        </div>
                        <div className="about-buttons">
                            <a href="https://drive.google.com/file/d/1sD_GojtRG2h1kpsMCRdBFurhsMgXTr3P/view?usp=sharing">My CV</a>
                            <a href="mailto:malespinozah@gmail.com">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}