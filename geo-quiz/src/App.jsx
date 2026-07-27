import Splash from "./scenes/Splash.jsx";
import Menu from './scenes/Menu.jsx';
import Game from './scenes/Game.jsx';
import GameOver from './scenes/GameOver.jsx';
import About from './scenes/About.jsx';
import { useSelector } from 'react-redux';

import { SCENES } from "./store/scenes.js";

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

function App() {
  const scene = useSelector(state => state.scene.currentScene);

  return (
    <>
      {sceneComponents[scene] || <Splash />}
    </>
  );
}

export default App;
