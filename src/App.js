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
import { ThemeProvider as ThemeJss} from 'react-jss';
import deepMerge from './utils/deep-merge';
const ThemeProvider = ({ theme = {}, ...restProps }) => {
  
  const memoTheme = useMemo(
    () => deepMerge(defaultTheme, theme), 
    [theme]);

  return (
    <ThemeJss 
      theme={memoTheme} 
      {...restProps} 
    />
  );
};

function App() {
  return (
    <ThemeProvider>
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