import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Splash from "./pages/Splash.jsx";
import Menu from './pages/Menu.jsx';
import GamePage from './pages/Game.jsx';
import { gameLoader } from './loaders/GameLoader.js';
import GameOver from './pages/GameOver.jsx';
import About from './pages/About.jsx';

const router = createBrowserRouter([
  { path: '/', element: <Splash /> },
  { path: '/menu', element: <Menu /> },
  { path: '/about', element: <About /> },
  { path: '/:gameType', element: <GamePage />, loader: gameLoader },
  { path: '/gameOver', element: <GameOver /> },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
