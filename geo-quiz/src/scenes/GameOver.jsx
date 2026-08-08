import { useSelector, useDispatch } from 'react-redux';

import { SCENES } from "../store/scenes.js";
import { sceneActions } from '../store/scene-slice.jsx';
import { gameActions } from '../store/game-slice.jsx';

import faceBad from '../assets/face_bad.svg';
import faceOkay from '../assets/face_okay.svg';
import faceGood from '../assets/face_good.svg';
import faceExcellent from '../assets/face_excellent.svg';
import stars from '../assets/stars.svg';
import PreviousButton from '../components/PreviousButton.jsx';

export default function Menu() {
    const dispatch = useDispatch();

    const score = useSelector(state => state.game.score);

    const resultByRange = [
        { min: 800, src: faceExcellent, encouragement: "Wow! Excellent!", stars: true },
        { min: 600, src: faceGood, encouragement: "Very well!", stars: false },
        { min: 300, src: faceOkay, encouragement: "Keep on learning!", stars: false },
        { min: 0, src: faceBad, encouragement: "Learn more!", stars: false },
    ];

    const result = resultByRange.find(item => score >= item.min);

    return (
        <div className="screen">
            {result.stars && (
                <img src={stars} className="screen__image screen__image--background" alt="Stars background" />
            )}
            <h2 className="game-over-title">Result</h2>
            <p className="game-over-score">Score: {score}</p>
            {/* <p className="game-over-best-score">You best score: 0</p> */}
            <p className="game-over-ecouragement">{result.encouragement}</p>
            <img
                src={result.src}
                className="screen__image screen__image--small"
                alt="Result face"
            />
            <PreviousButton onClick={() => {
                dispatch(gameActions.resetGame());
                dispatch(sceneActions.goToScene(SCENES.menu));
            }}>
                Go To The Menu
            </PreviousButton>
        </div >
    );
}