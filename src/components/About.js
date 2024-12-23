import React from 'react'
import python from '../images/python.svg';
import JavaScript from '../images/js.svg';
import html from '../images/html.svg';
import aws from '../images/amazon-web-services.svg';
import css from '../images/css.svg';
import git from '../images/git.svg';
import mongodb from '../images/mongodb.svg';
import nodejs from '../images/nodejs.svg';
import reactjs from '../images/react-2.svg'
import mongoose from '../images/Mongoose.svg'
import reactNative from '../images/react-native.png'
import redis from '../images/redis.png'

import avatar from '../images/avatar.jpg';


const About = () => {
    return (
        <div>
            <section className="about">
                <img src={avatar} className='about-avatar' alt='avatar' />
                <div className="img"></div>
                <h1>About</h1>
                <div className="description">
                    <div className="line"></div>
                    <p>In the world of web development, I've found my passion in crafting dynamic and interactive web applications using the MERN stack – <span>React.js</span>,<span>React-Native</span> <span>Node.js</span>, <span>MongoDB</span> and <span>Express.js</span>. These technologies have not only empowered me to build robust and scalable solutions but also ignited my curiosity to explore new possibilities in the realm of full-stack development <br /> <br /> A passionate developer having expertise in Web, App, API, and Database and the ability to adapt in
                        both self-starting and collaborative
                        environments while staying focused on
                        achieving high-quality results under strict
                        deadlines.</p>
                    <p className='second-para'></p>
                </div>
            </section>
            <section className="skills">
                <h1>My Skills</h1>
                <div className="cards">
                    <div className="skill-card">
                        <img src={html} alt="Python logo" />
                        <h2>Html</h2>
                    </div>
                    <div className="skill-card">
                        <img src={css} alt="Python logo" />
                        <h2>CSS</h2>
                    </div>
                    <div className="skill-card">
                        <img src={JavaScript} alt="Python logo" />
                        <h2>JavaScript</h2>
                    </div>
                    <div className="skill-card">
                        <img src={reactjs} alt="Python logo" />
                        <h2>React.js</h2>
                    </div>
                    <div className="skill-card">
                        <img src={reactNative} alt="Python logo" />
                        <h2>React Native</h2>
                    </div>
                    <div className="skill-card">
                        <img src={nodejs} alt="Python logo" />
                        <h2>Node.js</h2>
                    </div>
                    <div className="skill-card">
                        <img src={python} alt="Python logo" />
                        <h2>Express.js</h2>
                    </div>
                    <div className="skill-card">
                        <img src={mongodb} alt="Python logo" />
                        <h2>MongoDB</h2>
                    </div>
                    <div className="skill-card">
                        <img src={mongoose} alt="Python logo" />
                        <h2>Mongoose</h2>
                    </div>
                    <div className="skill-card">
                        <img src={redis} alt="Python logo" />
                        <h2>Redis</h2>
                    </div>
                    <div className="skill-card">
                        <img src={aws} alt="Python logo" />
                        <h2>AWS</h2>
                    </div>
                    <div className="skill-card">
                        <img src={git} alt="Python logo" />
                        <h2>Git</h2>
                    </div>


                </div>
            </section>


            <section className="experience">
                <div className="darker-div"></div>
                <h1>Experience</h1>
                <div className="lighter-div">
                    <div className="exp first-exp">
                        <h2 >Software Developer(01/2024 -Current)</h2>


                        <div className="exp-desc">
                            <h3>Gurucool, Jaipur </h3>
                            <p>&#8226; Architected and implemented a microservices infrastructure, enabling seamless integration of live video, chat, and call consultations using Agora SDK with Redis queue management, resulting in efficient user-astrologer interactions. <br /> &#8226; Built cross-platform applications using React Native for mobile and Next.js for web, managing complex application state with Redux and React Query to implement efficient data caching, real-time updates, and optimized API response times. <br /> &#8226; Optimized React Native codebase by adopting best architecture practices, reducing redundant re-renders, and implementing modular components for better maintainability and scalability. <br /> &#8226; Developed real-time chat functionality using GraphQL and Agora SDK, while integrating IVR and VoIP services through Exotel to enhance communication channels. <br /> &#8226; Collaborated on backend development with Node.js and Express.js, ensuring efficient API designs and seamless integration with MongoDB for scalable data management. <br /> &#8226; Consistently optimized API response times in React Native applications by implementing advanced state management techniques and performance-focused patterns. <br /> &#8226; Led strategic journey optimizations that boosted revenue by 80% through data-driven user experience improvements.</p>
                        </div>
                    </div>
                    <div className="exp first-exp">
                        <h2>Software Developer (01/2023 - 12/2023)</h2>


                        <div className="exp-desc">
                            <h3>Quick Heal, Pune</h3>
                            <p>&#8226; Worked as UI/UX Engineer and contributed to the development of v24, and upgraded version of v23 antivirus available in market. <br /> &#8226;  Collaborated with the team to design and implement the user interface using React js ensuring a seamless and responsive user experience
                                <br />&#8226;   Actively participated in the entire software development lifecycle, from concept to delivery, including requirement gathering, design, development, testing and deployment.
                                <br />
                                &#8226;  Utilized various software tools such as JIRA ,Git and Bitbucket</p>
                        </div>
                    </div>
                    <div className="exp">
                        <h2>Front-End Trainee (06/2022 - 08/2022)</h2>
                        <div className="exp-desc">
                            <h3>GLA University, Mathura</h3>
                            <p>&#8226;  Worked as Web and Mobile Apps Developer, done a project in web by using React Native.
                                <br />&#8226;  Responsible for checking cross browser and hence worked on diﬀerent browser like Safari, Opera, Firefox, Google Chrome and Internet Explorer. <br />&#8226;
                                Cooperating and communicating other team members for eﬃcient management works</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
