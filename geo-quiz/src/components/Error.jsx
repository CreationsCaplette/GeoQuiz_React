import Button from './Button.jsx';

export default function Error({ title, message, onAccept, onAcceptText = "Okay", onDecline, onDeclineText = "Cancel" }) {
    return (
        <div className="screen">
            <h3 className="screen__subtitle">{title}</h3>
            <p className="screen__info">{message}</p>
            {onAccept && (
                <Button variant="menu" onClick={onAccept}>
                    {onAcceptText}
                </Button>
            )}
            {onDecline && (
                <Button variant="text" onClick={onDecline}>
                    {onDeclineText}
                </Button>
            )}
        </div>
    );
}
