import React from 'react';
import './skills.css';
import AI from '../../assets/ai.png';
import FullStackDev from '../../assets/fullstackdev.png';

const Skills = () => {
    return (
       <section id='skills'>
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">
                I enjoy building smart and scalable tech solutions by combining full stack development with a growing interest in AI and system operations. My background in computer science allows me to explore how web technologies, machine learning, and infrastructure tools work together to solve real-world problems.
            </span>

            <div className="skillBars">
                <div className="skillBar">
                <img src={FullStackDev} alt="Full Stack Development" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Full Stack Web Development</h2>
                    <p>
                    I build responsive and dynamic web applications using technologies like React, Node.js, HTML, CSS, and JavaScript. I enjoy working on both the frontend and backend, creating seamless user experiences while learning to write clean, maintainable code and integrate APIs and databases.
                    </p>
                </div>
                </div>

                <div className="skillBar">
                <img src={AI} alt="AI & Automation" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>AI & Automation</h2>
                    <p>
                    I'm actively learning and experimenting with machine learning models using Python, Scikit-learn, and NLP libraries. My recent projects include classifying AI vs. human text and building simple automation scripts. I’m interested in how AI and scripting can improve system efficiency and decision-making.
                    </p>
                </div>
                </div>
            </div>
        </section>

    );
}

export default Skills;