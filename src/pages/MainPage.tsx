import Cards from "../components/Cards"

export default function MainPage() {
    return (
        <div className="container container-main">
            <header className="header">
                <h1 className="header__title">GuessAI</h1>
                <p className="header__subtitle">Choose a topic to begin the game, or press New Topics to generate new topics</p>
            </header>
            <main className="main">
                <h2 className="main__title">Try to guess...</h2>
                <Cards />
            </main>
            <footer className="footer">
                <p className="footer__text">
                    Copyright 2025 © <a className="footer__text-link" href="https://www.linkedin.com/in/anton-hryshchuk-247b4637a" target="_blank">Anton Hryshchuk</a>
                </p>
            </footer>
        </div>
    )
}