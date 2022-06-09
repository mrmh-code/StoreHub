
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Store from './components/Store/Store';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Features from './components/Features/Features';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import ProductDetails from './components/ProductDetails/ProductDetails';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Store/>}/>
        <Route path='/home' element={<Store/>}/> 
        <Route path='/service' element={<Services/>}/>
        <Route path='/features' element={<Features/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='product/:productId' element={<ProductDetails/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default App;
