import React from 'react';
import './intro.css';
import CV from './nayeb_Software_Engineer.pdf'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hi">Hi,</span>
                <span className="introText">I'm <span className="introName">Nayeb Towki,</span> <br />a Full-Stack Web Developer  <br /> & Cybersecurity Enthusiast</span>
                <p className="introPara">As a passionate technologist, I am dedicated to merging the analytical rigor of software engineering and the creative artistry of web development. My journey is a blend of developing robust software solutions and crafting engaging web experiences, showcasing a unique synergy between diverse technological domains.</p>
            <div>
                <a href={CV} target="_blank" rel="noopener noreferrer" download>
                    <button className="btn">Download My CV</button>
                </a>
            </div>
            
            </div>

        </section>
    );
}

export default Intro;