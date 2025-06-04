import React from 'react';

function Home() {

    const Lorem = () => {
        return <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac interdum justo. Proin imperdiet non diam 
                id pellentesque. Morbi iaculis, sem vel rhoncus maximus, dolor.</p>
    };

    const Skills = (props) => {
        return <h4>{props.name} {props.percent}</h4>
    };

    return (
        <>
            <section className="firstsection">
                <h1>Bonjour, je suis Jane Doe !</h1>
                <h2>Développeur web full stack</h2>
                <button>En savoir plus</button>
            </section>
            <section className="secondsection">
                <div classname="card">
                    <div classname="apropos">
                        <h3>A propos</h3>
                        <hr />
                            <img src="./john-doe-about.jpg" alt="portrait d'une personne" height="200" />
                            <Lorem />
                            <Lorem />
                            <Lorem />
                    </div>
                    <div className="skills">
                        <h3>Mes compétences</h3>
                        <hr />
                            <Skills name="HTML5" percent="90%" />
                            <Skills name="CSS3" percent="80%" />
                            <Skills name="JAVASCRIPT" percent="70%" />
                            <Skills name="PHP" percent="60%" />
                            <Skills name="REACT" percent="50%" />
                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;