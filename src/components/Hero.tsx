import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text">
                <h1>I am Harsh</h1>
                <h2>Front-End Developer & Designer</h2>
                <p>
                    Blending thoughtful UI design with clean, responsive development to create websites that look great and perform flawlessly.
                </p>
                <div className="hero-buttons">
                    <button className="cv-btn">Download CV</button>
                </div>
                <div className="socials">
                    <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/HarshKodes" target="_blank" rel="noreferrer">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>

            <div className="hero-image">
                <img src="/src/assets/pfp2.jpg" alt="Profile" />
            </div>
        </section>
    )
}