import Splash from "./components/Splash.jsx";
import { GameProgressContextProvider } from './store/GameProgress.jsx';


function App() {
  return (
    <GameProgressContextProvider>
      <Splash />
    </GameProgressContextProvider>
  );
}

export default App;
