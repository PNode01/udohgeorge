import "./Gallery.css"
import Expo from "./images/expo-25-mockup.jpg"
import Book from "./images/book-cover-mockup-design.png"
import Bookn from "./images/book-cover-mockup-2.png"
import Exto from './images/expo-25.png'
import Ib from './images/Ibadan-tech-expo-mockup.png'
import Ibn from './images/Ibadan-tech-expo-2.png'
import Virtue from './images/VIRTUE-MOCKUP-N.jpg'
import Juiceupn from './images/test---Copy-33.jpg'
import Sam from './images/Sammy-Gadgets---CONTEST-MOCKUP.png'
import Paridigm from './images/Paridigm-Hotels-mockup.png'
import Paridigmn from './images/Paridigm-Hotels-2.jpg'
import Juiceup from './images/JUICEUPP-MOCKUP.jpg'
import Jaded from './images/jaded-uyo-mockup.jpg'
import Jadedn from './images/jaded-create.jpg'
import Icecream from './images/ICECREAME-MOCKUP.png'
import Icecreamn from './images/ICECREAME-2.png'
import Chop from './images/chopz-place-mockup-1.jpg'
import Chopz from './images/chopz-place-mockup-2.jpg'
import Chopf from './images/CHOPZ_PLACE-newmenu-mockup-2.jpg'
import Logo from './images/ANIEHUB-LOGO-MOCKUP.jpg'
import Logon from './images/crunchy-logo-mockup.jpg'
import BR from './images/br-1.jpg'
import BRN from './images/br-2.jpg'


function Gallery() {
    const myArray = [Expo, BR, BRN, Book, Bookn, Exto, Ib, Ibn, Virtue, Juiceup, Juiceupn, Sam, Paridigm, Paridigm, Paridigmn, Jaded, Jadedn, Icecream, Icecreamn, Chop, Chopf, Chopz, Logo, Logon]
    return (
        <div id="gallery" className="gallery">
            <h1>Latest Projects</h1>
            <section>
                <div className="gallery-grid-container">
                    {
                        myArray.map(item=> 
                            <div className="gallery-grid-item">
                                <div className="image">
                                    <img src={item} alt="latest projects"/>
                                </div>
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
    )
}

export default Gallery;