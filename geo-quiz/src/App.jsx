import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { SCENES } from "./store/scenes.js";
import { fetchGameData } from './store/game-actions.jsx';

import Splash from "./scenes/Splash.jsx";
import Menu from './scenes/Menu.jsx';
import Game from './scenes/Game.jsx';
import GameOver from './scenes/GameOver.jsx';
import About from './scenes/About.jsx';

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
  const dispatch = useDispatch();
  useEffect(() => {
    if (gameType) {
      dispatch(fetchGameData(gameType));
    }
  }, [dispatch, gameType]);

  return <>{children}</>;
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
