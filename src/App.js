import "./App.css";
import Navbar from "./Navbar/Navbar";
// import Header from "./components/Header";
import About from "./components/AboutPage/About";
import Service from "./components/ServicePage/Service";
import Statistics from "./components/Statistics/Statistics";
import  Carousel from "./components/CarouselPage/Carousel";
import Sponsore from "./components/SponsorePage/Sponsore";
import Footer from "./components/FooterPage/Footer";
import Slider from "./components/HeaderSlider/Slider";
import  Form from "./components/FormPage/Form";
import Booking from "./components/BookingPage/Booking";


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Header /> */}
      <Slider />
      <About />
      <Booking />
      <Service />
      <br />
      <br />
      <Statistics />
      <br />
      <br />
      
      
      <div className="Carousel-Page">
      <Carousel />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Form />
      <div className="Sponsor-Head">
      <Sponsore />
      </div>
      <div className="FooterHeader-Component">
      <Footer />
      </div>
    </div>   
  );
}  

export default App;
