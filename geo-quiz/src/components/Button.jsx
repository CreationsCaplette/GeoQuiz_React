export default function Button({
    children,
    variant = 'menu',
    className = '',
    ...props
}) {
    const classes = ['button', variant === 'game' ? 'game' : 'menu', className]
        .filter(Boolean)
        .join(' ');

    return <button className={classes} {...props}>{children}</button>;
}