import { useContext } from 'react';

import Splash from "./components/Splash.jsx";
import Menu from './components/Menu.jsx';
import Game from './components/Game.jsx';

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
