export default function MenuButton({ children, variant = 'menu', ...props }) {
    return (
        <button className={`button ${variant === 'game' ? 'game' : 'menu'}`} {...props}>
            {children}
        </button>
    );
}