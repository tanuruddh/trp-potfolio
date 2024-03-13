import React from 'react';
import '../style.css';
import algo from '../images/algo.svg';
import tindog from '../images/tindog.svg';
import apnidukan from '../images/apni dukan.svg'
import tictactoe2 from '../images/images.svg';
import crypto from '../images/pngegg.png'
import natour from '../images/natour.svg'
import { useNavigate } from "react-router-dom";


const Home = () => {
    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/contact`;
        navigate(path);
    }

    let resume = () => {
        let path = `https://drive.google.com/file/d/1bwhxAwe9e6bDQiWgzzLuNtcH9YfE4sfE/view?usp=sharing`;
        window.open(path, '_blank');
    }
    return (
        <>

            <header className='header'> </header>
            <div className="landing">
                <div className="intro">
                    <h3>I'M <span>Trp Singh</span><br />Mern-Stack Developer </h3>
                    <button onClick={routeChange} className='contactBtn1'>Contact Me</button>
                    <button onClick={resume} className='contactBtn2'>Resume</button>
                </div>
                <div className="socials" >
                    <div className="line"></div>
                    <a href="https://github.com/tanuruddh/" target='_blank' rel="noreferrer"><i className="ri-github-fill"></i></a>
                    <a href="https://x.com/_trp_singh?t=zhNHkxWPjG_1yGYy9M4jqw&s=35" target='_blank' rel="noreferrer"><i className="ri-twitter-fill"></i></a>
                    <a target='_blank' href="https://www.linkedin.com/in/tanuruddh-pratap-singh-1b3845211/" rel="noreferrer"><i className="ri-linkedin-fill"></i></a>
                    <a href="https://wa.me/9548247281" target='_blank' rel="noreferrer"><i className="ri-whatsapp-line"></i></a>
                </div>
            </div>
            <section className="skills">
                <h1>Projects</h1>
                <div className="cards">

                    <a href="https://singular-bonbon-316e2b.netlify.app" target='_blank' rel="noreferrer">
                        <div className="skill-card">
                            <img src={apnidukan} alt="apni dukan logo" />
                            <h2>Apni Dukan</h2>
                        </div>
                    </a>
                    <a href="https://github.com/tanuruddh/Natour" target='_blank' rel="noreferrer">
                        <div className="skill-card">
                            <img src={natour} alt="Natour logo" />
                            <h2>Natour</h2>
                        </div>
                    </a>
                    <div className="skill-card">
                        <img src={algo} alt="algo logo" />
                        <h2>Algorithm Visualizer</h2>
                    </div>

                    <div className="skill-card">
                        <img src={crypto} alt="crypto logo" />
                        <h2 className='crypto-heading'>Cyrpto Stato</h2>
                    </div>
                    <a href="https://tanuruddh.github.io/Tic-Tac-Toe/" target='_blank' rel="noreferrer">
                        <div className="skill-card">
                            <img src={tictactoe2} alt="tic tac toe logo" />
                            <h2 >Tic-Tac-Toc</h2>
                        </div>
                    </a>
                    <a href="https://tanuruddh.github.io/TinDog/" target='_blank' rel="noreferrer">
                        <div className="skill-card">
                            <img src={tindog} alt="Tin Dog logo" />
                            <h2>TinDog</h2>
                        </div>
                    </a>
                </div >
            </section >

        </>
    )
}

export default Home
