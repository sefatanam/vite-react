import './App.css';

import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import TextGenerator from './pages/TextGenerator';

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <header className='bg-pink-600'>
          <h1>tOOl OF FUN</h1>
          <nav>
            <ul>
              <li>Home</li>
              <Link to={'text-generator'}>Text Generator</Link>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='text-generator' element={<TextGenerator/>}/>
          </Routes>
        </main>


      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
