import { SiAdobephotoshop, SiAdobeindesign } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";
import { RiMovie2AiFill } from "react-icons/ri";

import "./Services.css"

function Services() {
    return (
        <section id="services" >
            <div class="grid-container">
                <div class="grid-item">
                    <h1>Our Service</h1>
                    <h4>What We Do</h4>
                </div>
                <div class="grid-item">
                    <SiAdobephotoshop className="icon"/>
                    <h1>Graphic Design</h1>
                    <p>I turn blank spaces into visual masterpieces that captivate, inspire, and sell. If your brand needs a voice, I’ll make it shout!</p>
                </div>
                <div class="grid-item">
                    <SiAdobeindesign className="icon"/>
                    <h1>Branding</h1>
                    <p>Branding isn’t just a logo—it’s impact. I create bold identities that make brands unforgettable.</p>
                </div>
                <div class="grid-item">
                    <FaLaptopCode className="icon"/>
                    <h1>Web Design</h1>
                    <p>Web design is about experience. I create sleek, responsive sites that engage, impress, and convert.</p>
                </div>
                <div class="grid-item">
                    <RiMovie2AiFill className="icon"/>
                    <h1>Video Editing</h1>
                    <p>Video editing isn’t just cutting clips—it’s storytelling. I craft engaging visuals that captivate and leave a lasting impact</p>
                </div>
            </div>
        </section>
    )
}

export default Services;