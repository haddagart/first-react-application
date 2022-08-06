import React from 'react'

const About = () => {
    return (
        <div>
            <h4 style={{"padding-bottom":"1em"}}>Version 1.0.0 / Source: Traversy Media</h4>
            <p style={{"padding-bottom":"1em"}}>
                This project was implemented following a tutorial by Traversy Media.
                It is the first step in my quest to learn ReactJS.
                I learned in this crush course:
            </p>
            <ul>
                <li className="listItem">How to initiate a React application</li>
                <li className="listItem">How to install packages for the application</li>
                <li className="listItem">How to define components and add to them properties</li>
                <li className="listItem">Perform deletion, adding, and alterating on components</li>
                <li className="listItem">Added a simple backend server using json-server</li>
            </ul>
            <a href="/">Go back</a>
        </div>
    )
}

export default About
