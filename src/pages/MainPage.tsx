export default function MainPage() {
    return (
        <div className="container container-main">
            <header className="header">
                <h1 className="header__title">GuessAI</h1>
                <p className="header__subtitle">Choose a topic to begin the game, or press New Topics to generate new cards</p>
            </header>
            <main className="main">
                <h2 className="main__title">Try to guess...</h2>
                <ul className="main__cards">
                    <li className="main__cards-item" tabIndex={0}>A character from the Breaking Bad</li>
                    <li className="main__cards-item" tabIndex={0}>A famous rapper</li>
                    <li className="main__cards-item" tabIndex={0}>A pop star from the 2000s</li>
                </ul>
                <button className="primary-btn">New Topics</button>
            </main>
            <footer className="footer">
                <p className="footer__text">
                    Copyright 2025 © <a className="footer__text-link" href="https://github.com/1ways" target="_blank">Anton Hryshchuk</a>
                </p>
            </footer>
        </div>
    )
}