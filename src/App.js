import Gallery from './Components/gallery/Gallery';
import Navbar from './Components/navbar/Navbar'
import Profile from './Components/profile/Profile';
import Services from './Components/services/Services';
import Contact from './Components/contact/Contact';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Profile />
            </div>
            <Services />
            <Gallery />
            <Contact />
        </div>
    )
}

export default App;