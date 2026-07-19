import { useContext } from 'react';

import Splash from "./scenes/Splash.jsx";
import Menu from './scenes/Menu.jsx';
import Game from './scenes/Game.jsx';
import GameOver from './scenes/GameOver.jsx';
import About from './scenes/About.jsx';

import { SceneContextProvider } from './store/SceneContext.jsx';
import SceneContext from './store/SceneContext';

import { GameContextProvider } from './store/GameContext';

function SceneContent() {
  const sceneContext = useContext(SceneContext)

  let sceneState = <Splash />;
  if (sceneContext.scene === 'menu') {
    sceneState = <Menu />;
  } else if (sceneContext.scene === 'capitalsGame') {
    sceneState = <GameContextProvider><Game /></GameContextProvider>
  } else if (sceneContext.scene === 'gameOver') {
    sceneState = <GameContextProvider><GameOver /></GameContextProvider>
  } else if (sceneContext.scene === 'about') {
    sceneState = <About />;
  }

  return sceneState;
}

function App() {
  return (
    <SceneContextProvider>
      <SceneContent />
    </SceneContextProvider>
  );
}

export default App;
