import React from 'react';
import './skills.css';
import Cybersecurity from '../../assets/cybersecurity.png';
import FullStackDev from '../../assets/fullstackdev.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">Combining the intricacies of software engineering and the creativity of full stack web development, I deliver tailored tech solutions. My approach is rooted in a deep understanding of software development principles and a flair for building engaging web interfaces.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={FullStackDev} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Full Stack Web Development</h2>
                        <p>As a Full Stack Web Developer, I specialize in developing dynamic, responsive websites and applications. My expertise spans from crafting engaging user interfaces with modern front-end technologies to architecting efficient back-end solutions, ensuring a seamless and cohesive user experience across all digital platforms.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Cybersecurity} alt="Cybersecurity" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Cybersecurity</h2>
                        <p>In Cybersecurity, my focus is on creating robust defenses against digital threats. I employ a blend of risk analysis, security protocols, and the latest cybersecurity trends to protect sensitive data and systems, ensuring the integrity and confidentiality of information in an increasingly connected digital world.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;