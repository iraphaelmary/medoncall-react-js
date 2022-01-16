import './App.css';
import Header from './components/Header/Header';
import Feature from './components/Feature/Feature';
import Services from './components/Services/Services';
import About from './components/About/About';
import Pharmacy from './components/Pharmacy/Pharmacy';
import Blog from './components/Blog/Blog';
import AppDownload from './components/AppDownload/AppDownload';
import Footer from './components/Footer/Footer';

function App() {
  return (
   <div>
      <Header />
      <Feature />
      <Services />
      <About />
      <Pharmacy />
      <Blog />
      <AppDownload />
      <Footer />
   </div>
  );
}

export default App;
