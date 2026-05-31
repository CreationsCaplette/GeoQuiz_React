export default function MenuButton({ children, ...props }) {
    return (
        <button className='menu-button' {...props}>
            {children}
        </button>
    );
}