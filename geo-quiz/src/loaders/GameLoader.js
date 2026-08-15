export async function gameLoader({ params }) {
    const gameType = params.gameType;

    if (!gameType) {
        throw new Response(JSON.stringify({ message: 'Invalid game type.' }), {
            status: 500,
        });
    }

    const res = await fetch(`https://localhost:7266/game/${gameType}`);

    let data;
    try {
        data = await res.json();
    } catch {
        data = null;
    }
    if (!res.ok) {
        const msg = data && data.message ? data.message : `Request failed with status ${res.status}`;
        throw new Error(msg);
    }
    return data;
}