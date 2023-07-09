import githubLogo from '../assets/github-mark.svg'
import {useEffect, useState} from "react";

function Footer() {

    const [quoto, setQuoto] = useState("");

    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(json => json.content ? setQuoto(json.content) : "")
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <div>
                <h1>{quoto}</h1>
            </div>

            <div className="footer-section">
                <h2>Md. Samiul Hoque</h2>
                <p className="about-my-self">
                    I am very simple and I love a simple way of living. I try to help others & myself with help of
                    Allah. By the way, I'm a Mobile App Developer. I love coding.
                </p>
                <p>
                    Sr. App Developer
                    <br/>
                    Shadhin Fintech Ltd.
                    <br/>
                    samiul.limo@gmail.com
                </p>
                <a href="https://github.com/samiulhoquelimo" target="_blank">
                    <img src={githubLogo} className="github" alt="Github logo"/>
                </a>
            </div>
        </>
    )
}

export default Footer
