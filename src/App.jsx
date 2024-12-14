import { BrowserRouter } from "react-router-dom";
import {About, Contact, Experience, Navbar, Tech, Works, Hero, StarsCanvas, Footer} from './components';
import Resume from "./components/Resume/Resume";


const App = () => {


  return (

    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        <Resume />
        
        <div className="relative z-o">
          <Contact />
          <StarsCanvas />
        </div>

        <Footer />
      </div>
    </BrowserRouter>


  )
}

export default App
