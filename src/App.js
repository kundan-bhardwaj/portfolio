import './App.css';
import { ToastContainer } from 'react-toastify';
import Landing from './components/landing';
import Resume from './components/resume';
import Services from './components/services';
import Hireme from './components/hireme'
import Yourorders from './components/yourorders'
import Footer from './components/footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Offer from './components/offer';
import Order from './components/order';
import PackState from './context/contexts';
import Education from './components/education';
import About from './components/about';
import Auth from './components/auth';
import Quote from './components/quote';


function App() {
  return (
    <div className="App">
      <div id='main'>
        <PackState>
          <BrowserRouter>
            <Routes>
              <Route index element={<Landing />}>
              </Route>
              <Route path='Resume' element={<Resume />}>
              </Route>
              <Route path='yourorders' element={<Yourorders />}>
              </Route>
              <Route path='hireme' element={<Hireme />}>
              </Route>
              <Route path='services' element={<Services />}>
              </Route>
              <Route path='offer' element={<Offer />}>
              </Route>
              <Route path='order' element={<Order />}>
              </Route>
              <Route path='education' element={<Education />}>
              </Route>
              <Route path='about' element={<About />}>
              </Route>
              <Route path='auth' element = {<Auth />}>
              </Route>
              <Route path='quote' element = {<Quote />}>
              </Route>
            </Routes>
          </BrowserRouter>
          <ToastContainer theme='dark' position='top-right'/>
          <Footer />
        </PackState>
      </div>
    </div>
  );
}

export default App;
