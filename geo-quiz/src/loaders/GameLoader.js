async function loadGame(gameType) {
    const response = await fetch(`https://localhost:7266/game/${gameType}`);

    if (!response.ok) {
        return new Response(JSON.stringify({ message: 'Could not fetch game.' }), {
            status: 500,
        });
    }

    const resData = await response.json();
    return {
        gameType: gameType,
        questions: resData,
    };
}

export async function gameLoader({ params }) {
    const gameType = params.gameType;

    return {
        gameData: loadGame(gameType),
    };
}