import React, { useState, useEffect } from 'react';
import './works.css';
import Github from '../../assets/GitHub.png';

const Works = ({ githubUsername }) => {
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const featuredRepos = [
        'ai-detector-ui',
        'currency-converter-python',
        'ScientificCalculatorWithGUI',
        'Advanced-Word-Counter',
        'react-task-tracker'
    ];

    const projectDescriptions = {
        'ai-detector-ui': 'A React-based frontend for classifying AI vs. human text using BERT and NLP techniques. Integrated with FastAPI backend.',
        'currency-converter-python': 'Simple CLI tool that fetches real-time currency exchange rates via API and converts between currencies.',
        'ScientificCalculatorWithGUI': 'Java-based GUI calculator supporting complex expressions and scientific operations using Swing.',
        'Advanced-Word-Counter': 'Desktop app to count and analyse word frequencies in large text files. Built with Java Swing.',
        'react-task-tracker': 'A dynamic React app for managing tasks with add/delete toggle functionality and component state.'
    };

    useEffect(() => {
        fetch(`https://api.github.com/users/nayebtowki/repos`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const filteredRepos = data.filter(repo => featuredRepos.includes(repo.name));
                setRepos(filteredRepos);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setIsLoading(false);
            });
    }, [githubUsername]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <section id='works'>
            <h2 className="worksTitle">Welcome to My Portfolio</h2>
            <span className="worksDesc">
                Dive into a showcase where innovation meets execution. These projects reflect my passion for building practical tech solutions — from full-stack applications to intelligent systems. Whether it's a front-end interface or a machine learning model, each project captures a stage in my learning and growth.
            </span>
            <div className="worksImgs">
                {repos.length > 0 ? (
                    repos.map(repo => (
                        <div key={repo.id} className="workItem">
                            <a
                                href={repo.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${repo.name} on GitHub`}
                            >
                                <img src={Github} alt={repo.name} className="worksImg" />
                                <h4>{repo.name.replace(/[-_]/g, ' ')}</h4>
                                <p className="projectDesc">{projectDescriptions[repo.name]}</p>
                            </a>
                        </div>
                    ))
                ) : (
                    <p>No featured repositories found.</p>
                )}
            </div>
        </section>
    );
};

export default Works;
