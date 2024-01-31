import gyltImage from '../assets/projectTwo.png';
import healthyPanda from '../assets/healthyPanda.png';
import jayBoyce from '../assets/boyce.png';
import weatherApp from '../assets/weatherApp.png';
import horiseon from '../assets/horiseon.png';
import nationalPark from '../assets/nationalPark.png';

function Portfolio() {
    return (
        <main>
            <section id="work">
                <h2>My Work</h2>
                <div className="projects">
                    <div className="project">
                        <a href="https://get-your-list-together-c8df3b5b0755.herokuapp.com/login" target="_blank" rel="noreferrer">
                            <div className="project-title">
                                <h3>Get Your List Together:</h3>
                                <p>mySQL, Handlebars, Heroku</p>
                            </div>

                            <img src={gyltImage} alt="Project Two Image" />
                        </a>
                    </div>

                    <div className="project">
                        <a href="https://jjthedev.github.io/Fitness-App/" target="_blank" rel="noreferrer">
                            <div className="project-title">
                                <h3>Healthy Panda:</h3>
                                <p>JavaScript & API</p>
                            </div>

                            <img src={healthyPanda} alt="Healthy Panda project image" />
                        </a>
                    </div>

                    <div className="project">
                        <a href="https://jboyce.netlify.app/" target="_blank" rel="noreferrer">
                            <div className="project-title">
                                <h3>Jay Boyce:</h3>
                                <p>JavaScript</p>
                            </div>

                            <img src={jayBoyce} alt="Jay Boyce project image"
                            />
                        </a>
                    </div>

                    <div className="project">
                        <a href="https://maggiemcc.github.io/weather-dashboard/" target="_blank" rel="noreferrer">
                            <div className="project-title">
                                <h3>Weather App:</h3>
                                <p>JavaScript</p>
                            </div>
                            <img src={weatherApp} alt="Weather project image" />
                        </a>
                    </div>

                    <div className="project">
                        <a href="https://maggiemcc.github.io/Horiseon/" target="_blank" rel="noreferrer">
                            <div className="project-title">
                                <h3>Horiseon:</h3>
                                <p>HTML/CSS</p>
                            </div>

                            <img src={horiseon} alt="Horiseon project image" />
                        </a>
                    </div>

                    <div className="project">
                        <a href="https://maggie-uvu-projects.netlify.app/national_park/" target="_blank" rel="noreferrer">
                            <div className="project-title">
                                <h3>National Park:</h3>
                                <p>SCSS</p>
                            </div>
                            <img src={nationalPark}alt="National park project image" />
                        </a>
                    </div>
                </div>

            </section>
        </main>
    );
}
export default Portfolio;
