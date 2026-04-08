import { useContext } from 'react';

import Splash from "./components/Splash.jsx";
import Menu from './components/Menu.jsx';

import { GameProgressContextProvider } from './store/GameProgressContext.jsx';
import GameProgressContext from './store/GameProgressContext';

function GameContent() {
  const gameProgressContext = useContext(GameProgressContext)

  let gameState = <Splash />;
  if (gameProgressContext.progress === 'menu') {
    gameState = <Menu />;
  }

  return gameState;
}

function App() {
  return (
    <GameProgressContextProvider>
      <GameContent />
    </GameProgressContextProvider>
  );
}

export default App;
