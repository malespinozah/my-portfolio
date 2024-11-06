export default function Footer() {
    // JS comment
    return(
        <footer id="footer">
            <div>
                <h3>Social Media</h3>
                <a href="https://www.instagram.com/malespinozah/"><span className="fa-brands fa-instagram"></span> Instagram </a>
                <a href="https://www.linkedin.com/in/malespinozah/"><span className="fa-brands fa-linkedin"></span> LinkedIn</a>
            </div>
            <div>
                <h3><span className="fa-brands fa-github"></span> GitHub</h3>
                <span>
                    <a href="https://github.com/malespinozah">https://github.com/malespinozah</a>
                </span>
            </div>
            <div>
                <h3><i className="fa-solid fa-map-pin"></i> Location</h3>
                <span>Toronto, Canada</span>
            </div>
            <div>
                <div className="copyright">
                    Copyright &copy; Maria Espinoza, 2024. <br></br>All rights reserved. 
                </div>
            </div>
        </footer>
    )
}