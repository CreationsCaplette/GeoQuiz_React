import { useContext } from 'react';
import GameContext from '../store/GameContext.jsx';
import SceneContext from '../store/SceneContext.jsx';
import { SCENES } from "../store/scenes.js";
import faceBad from '../assets/face_bad.svg';
import faceOkay from '../assets/face_okay.svg';
import faceGood from '../assets/face_good.svg';
import faceExcellent from '../assets/face_excellent.svg';
import stars from '../assets/stars.svg';
import PreviousButton from '../components/PreviousButton.jsx';

export default function Menu() {
    const { goToScene } = useContext(SceneContext);

    const {
        score,
    } = useContext(GameContext);

    const resultByRange = [
        { min: 800, src: faceExcellent, encouragement: "Wow! Excellent!" },
        { min: 600, src: faceGood, encouragement: "Very well!" },
        { min: 300, src: faceOkay, encouragement: "Keep on learning!" },
        { min: 0, src: faceBad, encouragement: "Learn more!" },
    ];

    const result = resultByRange.find(item => score >= item.min);

    return (
        <div className="screen">
            <h2 className="game-over-title">Result</h2>
            <p className="game-over-score">Score: {score}</p>
            <p className="game-over-best-score">You best score: 0</p>
            <p className="game-over-ecouragement">{result.encouragement}</p>
            <img
                src={result.src}
                className="screen__image screen__image--small"
                alt="Result face"
            />
            <PreviousButton onClick={() => goToScene(SCENES.menu)}>
                Go Back
            </PreviousButton>
        </div>
    );
}