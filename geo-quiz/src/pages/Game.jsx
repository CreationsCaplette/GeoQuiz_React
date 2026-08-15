import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';

import Game from '../components/Game.jsx';

export default function GamePage() {
    const { gameData } = useLoaderData();

    return (
        <Suspense fallback={<p className="center">Fetching countries data...</p>}>
            <Await resolve={gameData}>
                {(loadedGameData) => <Game gameData={loadedGameData} />}
            </Await>
        </Suspense>
    );
}