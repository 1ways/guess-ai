import arrowIcon from '../assets/arrow.svg'

export default function ChatPage() {
    return (
        <div className="container container-main">
            <header className="chat-header">
                <p className="chat-header__title">GuessAI</p>
            </header>
            <main className="main">
                <div className="chat">
                    <div className="chat__body">

                    </div>
                    <div className="chat__footer">
                        <input className="chat__footer-input" type="text" placeholder="Ask something..." />
                        <button className="chat__footer-btn primary-btn">
                            <img className="chat__footer-arrow" src={arrowIcon} alt="Send Icon" />
                        </button>
                    </div>
                </div>
            </main>
            <footer className="footer">
                <p className="footer__text">
                    Copyright 2025 © <a className="footer__text-link" href="https://www.linkedin.com/in/anton-hryshchuk-247b4637a" target="_blank">Anton Hryshchuk</a>
                </p>
            </footer>
        </div>
    )
}