import "./App.css";
import Navbar from "./Navbar/Navbar";
import Header from "./components/Header";
import About from "./components/AboutPage/About";
import Service from "./components/ServicePage/Service";
import Statistics from "./components/Statistics/Statistics";
import  Carousel from "./components/CarouselPage/Carousel";
import Sponsore from "./components/SponsorePage/Sponsore";
import Footer from "./components/FooterPage/Footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <About />
      <Service />
      <Statistics />
      
      <div className="Sponsor-Head">
      <Sponsore />
      </div>
      <div className="Carousel-Page">
      <Carousel />
      </div>
      <br />
      <div className="FooterHeader-Component">
      <Footer />
      </div>
    </div>   
  );
}  

export default App;
