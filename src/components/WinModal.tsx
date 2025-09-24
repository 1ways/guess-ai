import { useNavigate } from "react-router"

type WinModalProps = {
    open: boolean,
    secret: string
}

export default function WinModal({ open, secret }: WinModalProps) {
    const navigate = useNavigate()

    return (
        <div className={`modal${open ? " show" : ""}`}>
            <div className="modal__body">
                <p className="modal__title"><span>The secret was:</span> {secret}</p>
                <p className="modal__text">Congratulations, you guessed the secret.
                    Want to try another round?</p>
                <button 
                    className="primary-btn"
                    onClick={() => navigate("/")}
                >Back to the Topics</button>
            </div>
        </div>
    )
}