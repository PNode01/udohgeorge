import ProfilePics from "./PERRY-PP-2.png"
import "./Profile.css"
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaFacebookF } from "react-icons/fa";
import Resume from './Resume.pdf'

function Profile() {
    return (
        <>
            <header id="home" class="home animated">
                <div class="home-details">
                    <h1>Udoh George</h1>
                    <h2>Graphics Designer</h2>
                    <p>I believe that design more than Aesthetics - It's a Brand's Heartbeat</p>
                    <p>I bring visuals to life, ensuring every design is consistent, engaging, and a perfect reflection of YOUR Brand's Voice. - YOUR Brand is at the Center not my designing skill.</p>
                    <p>Your Brand Needs a Voice, Let's Help Make it Shout!</p>
                    <div class="download-social">
                        <a href={Resume} class="btn" download={Resume}>Download Cv</a>
                        <div class="social-icons">
                            <a href="https://www.linkedin.com/in/udoh-george" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            <a href="https://Wa.me/+2349069689034" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
                            <a href="https://web.facebook.com/profile.php?id=61574191224029" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                            <a href="https://github.com/PNode01" target="_blank" rel="noreferrer"><FaGithub /></a>
                        </div>
                    </div>
                </div>
                <div class="home-img">
                    <div class="img-box">
                        <img src={ProfilePics} alt="portrait picture of udoh george" />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Profile;