export default function Button({
    children,
    variant = 'menu',
    className = '',
    ...props
}) {
    const classes = ['button', variant, className].filter(Boolean).join(' ');

    return <button className={classes} {...props}>{children}</button>;
}