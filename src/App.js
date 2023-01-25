import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery/gallery';
import Ameneties from './pages/Ameneties';
import Rooms from './pages/Rooms';
import RoomsDetail from './pages/Rooms/details';
import Login from './components/login';
import Forget from './components/forget';
import Reset from './components/reset';
import Blog from './pages/Blog';
import SingleBlog from './pages/Blog/singleBlog';
import Error from './pages/error';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/ameneties' element={<Ameneties />} />
          <Route path='/rooms' element={<Rooms />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/details/:id' element={<SingleBlog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forget' element={<Forget />} />
          <Route path='/reset' element={<Reset />} />
          <Route path='/rooms/details/:id' element={<RoomsDetail />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
