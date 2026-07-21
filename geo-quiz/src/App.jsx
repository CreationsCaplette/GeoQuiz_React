import { useContext } from 'react';
import Splash from "./scenes/Splash.jsx";
import Menu from './scenes/Menu.jsx';
import Game from './scenes/Game.jsx';
import GameOver from './scenes/GameOver.jsx';
import About from './scenes/About.jsx';
import { SceneContextProvider } from './store/SceneContext.jsx';
import SceneContext from './store/SceneContext';
import { SCENES } from "./store/scenes.js";
import { GameContextProvider } from './store/GameContext';

const sceneComponents = {
  [SCENES.splash]: <Splash />,
  [SCENES.menu]: <Menu />,
  [SCENES.capitalsGame]: <GameScene gameType="capitals"><Game /></GameScene>,
  [SCENES.capitalsReverseGame]: <GameScene gameType="capitals_reverse"><Game /></GameScene>,
  [SCENES.flagsGame]: <GameScene gameType="flags"><Game /></GameScene>,
  [SCENES.gameOver]: <GameScene><GameOver /></GameScene>,
  [SCENES.about]: <About />,
};

function GameScene({ gameType, children }) {
  return <GameContextProvider gameType={gameType}>{children}</GameContextProvider>;
}

function SceneContent() {
  const { scene } = useContext(SceneContext);
  return sceneComponents[scene] || <Splash />;
}

function App() {
  return (
    <SceneContextProvider>
      <SceneContent />
    </SceneContextProvider>
  );
}

export default App;
