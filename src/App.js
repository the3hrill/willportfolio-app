import './App.css';
import Homepage from './components/Homepage';

import { Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { useState } from 'react';
import { ToggleContext } from './components/ToggleContext';

import MainMenu from './MainMenu';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="App">
      {' '}
      <>
        {' '}
        <ToggleContext.Provider value={[isFlipped, flip]}>
          <Routes>
            <Route
              path="/"
              element={
                <div className="flexContainer">
                  <MainMenu />
                  <Homepage isFlipped={isFlipped} flip={flip} />
                </div>
              }
            />
            <Route
              path="/Projects"
              element={
                <div className="flexContainer">
                  <MainMenu />
                  <Projects isFlipped={isFlipped} flip={flip} />
                </div>
              }
            />
            <Route
              path="/Contact"
              element={
                <div className="flexContainer">
                  <MainMenu />
                  <Contact isFlipped={isFlipped} flip={flip} />
                </div>
              }
            />
          </Routes>{' '}
        </ToggleContext.Provider>
      </>{' '}
    </div>
  );
}

export default App;
