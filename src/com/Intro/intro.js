import React from 'react';
import './intro.css';
import CV from './NayebTowkiCV.pdf'

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hi">Hi,</span>
                <span className="introText">I'm <span className="introName">Nayeb Towki,</span> <br />A Graduate AI Engineer <br /> & Software Developer</span>
                <p className="introPara">As a passionate technologist, I am dedicated to bridging the analytical power of artificial intelligence with the creativity of software engineering. My journey blends building intelligent applications and user-centric web experiences, showcasing a strong foundation in AI, full-stack development, and modern tech solutions.</p>
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