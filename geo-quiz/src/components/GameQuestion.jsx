export default function GameQuestion({ children, ...props }) {
    return (
        <p className='game-question' {...props}>
            {children}
        </p>
    );
}