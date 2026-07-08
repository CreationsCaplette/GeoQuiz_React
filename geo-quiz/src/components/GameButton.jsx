export default function GameButton({ children, ...props }) {
    return (
        <p>
            <button className='game-button' {...props}>
                {children}
            </button>
        </p>
    );
}