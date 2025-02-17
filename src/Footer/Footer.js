import {useNavigate} from "react-router-dom";
import "./Footer.css"

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div id="footerBar">
            <div>
                {/* <h2 id="footerTitle">Bytes of Love</h2> */}
                <img id="footerImage" src="BoL Logo Edited.png"></img>
            </div>

            <div id="socials">
                <a href="https://github.com/ufosc/BytesOfLoveWebsite">
                    <img src="images/github_logo.png" id="githubLogo"></img>
                </a>
            </div> 
        </div>
    )
}

export default Footer
