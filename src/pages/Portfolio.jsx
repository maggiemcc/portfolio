import gitHubCat from '../assets/github.png';
import heroku from '../assets/heroku.svg';
import netlify from '../assets/netlify-logo.png';
import render from '../assets/render.png';

import gyltImage from '../assets/projectTwo.png';
import healthyPanda from '../assets/healthyPanda.png';
import jayBoyce from '../assets/boyce.png';
import weatherApp from '../assets/weatherApp.png';
import horiseon from '../assets/horiseon.png';
import nationalPark from '../assets/nationalPark.png';
import textEditor from '../assets/pwa.png';
import tahanan from '../assets/tahanan.png';


function Portfolio() {
    return (
        <main>
            <section id="work">
                <h2>My Work</h2>
                <div className="projects">

                <div className="project">
                        <div className="project-title">
                            <h3>Tahanan Candle Co.</h3>
                            <div className='apps'>
                                <li><a href="https://github.com/mjthurber/Tahanan_Candle?tab=readme-ov-file" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                                <li><a href="https://tahanancandleco.onrender.com/" target="_blank" rel="noreferrer"><img className="project-apps" src={render} alt="render logo" /></a></li>
                            </div>
                        </div>
                        <img src={tahanan} alt="Tahanan Image" />
                    </div>

                    <div className="project">
                        <div className="project-title">
                            <h3>Text Editor</h3>
                            <div className='apps'>
                                <li><a href="https://github.com/maggiemcc/text-editor?tab=readme-ov-file" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                                <li><a href="https://pwa-text-editor-roys.onrender.com/" target="_blank" rel="noreferrer"><img className="project-apps" src={render} alt="render logo" /></a></li>
                            </div>
                        </div>
                        <img src={textEditor} alt="Text Editor Image" />
                    </div>

                    <div className="project">
                        <div className="project-title">
                            <h3>Get Your List Together</h3>
                            <div className='apps'>
                                <li><a href="https://github.com/britt-young/get_your_list_together" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                                <li><a href="https://get-your-list-together-c8df3b5b0755.herokuapp.com/login" target="_blank" rel="noreferrer"><img className="project-apps" src={heroku} alt="heroku logo" /></a></li>
                            </div>
                        </div>
                        <img src={gyltImage} alt="Project Two Image" />
                    </div>

                    <div className="project">
                        <div className="project-title">
                            <h3>Healthy Panda</h3>
                            <div className='apps'>
                                <li><a href="https://github.com/JJTheDev/Fitness-App" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                                <li><a href="https://jjthedev.github.io/Fitness-App/" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                            </div>
                        </div>

                        <img src={healthyPanda} alt="Healthy Panda project image" />
                    </div>

                    <div className="project">
                        <div className="project-title">
                            <h3>Jay Boyce</h3>
                            <div className='apps'>
                                <li><a href="https://github.com/maggiemcc/JBoyce" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                                <li><a href="https://jboyce.netlify.app/" target="_blank" rel="noreferrer"><img className="project-apps" src={netlify} alt="netlify logo" /></a></li>
                            </div>
                        </div>

                        <img src={jayBoyce} alt="Jay Boyce project image" />
                    </div>

                    <div className="project">
                        <div className="project-title">
                            <h3>Weather App</h3>
                            <div className='apps'>
                                <li><a href="https://github.com/maggiemcc/weather-dashboard" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                                <li><a href="https://maggiemcc.github.io/weather-dashboard/" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                            </div>
                        </div>
                        <img src={weatherApp} alt="Weather project image" />
                    </div>

                    <div className="project">
                        <div className="project-title">
                            <h3>Horiseon</h3>
                            <div className='apps'>
                                <li><a href="https://github.com/maggiemcc/Horiseon" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                                <li><a href="https://maggiemcc.github.io/Horiseon/" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                            </div>
                        </div>

                        <img src={horiseon} alt="Horiseon project image" />
                    </div>

                    <div className="project">
                        <div className="project-title">
                            <h3>National Park</h3>
                            <div className='apps'>
                                <li><a href="https://github.com/maggiemcc/uvu-projects" target="_blank" rel="noreferrer"><img className="project-apps" src={gitHubCat} alt="github logo" /></a></li>
                                <li><a href="https://maggie-uvu-projects.netlify.app/national_park/" target="_blank" rel="noreferrer"><img className="project-apps" src={netlify} alt="netlify logo" /></a></li>
                            </div>
                        </div>
                        <img src={nationalPark} alt="National park project image" />
                    </div>
                </div>

            </section>
        </main>
    );
}
export default Portfolio;
