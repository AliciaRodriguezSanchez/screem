import React, {useMemo} from 'react';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';

import './App.css';
import Header from './components/Footer';
import Footer from './components/Header';
import HomePage from './components/Home';
import Player from './components/Player';
import Epg from './containers/epgContainer';
import Placard from './components/Placard';
import defaultTheme from './constants/theme';
import { ThemeProvider } from 'react-jss';

function App() {

  const memoTheme = useMemo(()=> (
    defaultTheme
  ),[]);

  return (
    <ThemeProvider theme={memoTheme}>
      <div className='App'>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={ <HomePage/>} />
            <Route exact path="/list" element={<Epg/>} />
            <Route exact path="/player" element={<Player/>} />
            <Route exact path="/placard" element={<Placard/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;