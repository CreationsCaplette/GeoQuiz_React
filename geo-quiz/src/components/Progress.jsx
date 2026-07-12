export default function Progress({ progressIndex, questionCount }) {
    const formattedProgress = `${progressIndex}/${questionCount}`;

    return <div id="progress">{formattedProgress}</div>
}