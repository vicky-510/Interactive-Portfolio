
// import React from 'react'
import { useEffect } from 'react';
import '../assets/styles/whyichoose.css'; 


function Whyichoose() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <main>
                <h1>Why I Chose Full-Stack Development</h1>
                <p><strong>By Vigneshwaran M | Full-Stack Developer</strong></p>

                <p>Choosing full-stack development was not just a career decision—it was a passion-driven journey. I wanted to build end-to-end applications that are scalable, functional, and user-friendly.</p>

                <h2>Starting with the Frontend</h2>
                <p>I began with frontend technologies like <strong>HTML, CSS, JavaScript, React.js</strong> and later advanced to <strong>Angular</strong>. Creating engaging UI/UX quickly became my strength.</p>

                <h2>Learning the Backend</h2>
                <p>To gain complete control, I explored the backend using <strong>Node.js</strong> and databases like <strong>MongoDB and MySQL</strong>. I wanted to handle data securely and efficiently—this led me to love APIs, backend logic, and server-side integration.</p>

                <h2>Projects that Shaped Me</h2>
                <ul>
                    <li><strong>Domain Insight:</strong> A visual analytics tool built with Angular & Node.</li>
                    <li><strong>IVY Amplify:</strong> A media upload and management platform.</li>
                    <li><strong>Leave Management System:</strong> Internal employee leave tracking tool.</li>
                </ul>

                <h2>Final Thoughts</h2>
                <p>Full-stack development is more than a skill—it’s a mindset. It gives me the flexibility to solve problems from both ends. And as technology evolves, I’ll keep learning and growing along with it.</p>

                <p>Visit my portfolio at <a href="https://vwaran.com">vwaran.com</a> to see my full work!</p>
            </main>
            <hr className='horizontal-css-blog' />
        </>
    )
}
export default Whyichoose;