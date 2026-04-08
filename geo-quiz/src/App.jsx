import Splash from "./components/Splash.jsx";
import { GameProgressContextProvider } from './store/GameProgress.jsx';

function App() {
  function handleTimeout() {
    console.log("Timeout");
  }

  return (
    <GameProgressContextProvider>
      <Splash onTimeout={handleTimeout} />
    </GameProgressContextProvider>
  );
}

export default App;
