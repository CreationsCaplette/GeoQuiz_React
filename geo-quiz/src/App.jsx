import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Splash from "./scenes/Splash.jsx";
import Menu from './scenes/Menu.jsx';
import Game from './scenes/Game.jsx';
import GameOver from './scenes/GameOver.jsx';
import About from './scenes/About.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Splash /> },
  { path: '/menu', element: <Menu /> },
  { path: '/about', element: <About /> },
  { path: '/:gameType', element: <Game /> },
  { path: '/gameOver', element: <GameOver /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
