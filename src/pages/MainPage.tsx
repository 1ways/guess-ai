import { useState } from "react"
import Cards from "../components/Cards"
import TopicsSelector from "../components/TopicsSelector"

export default function MainPage() {
    const [isSelecting, setIsSelecting] = useState(true)
    const [selectedTopics, setSelectedTopics] = useState<string[]>([])

    return (
        <div className="container container-main">
            <header className="header">
                <h1 className="header__title">GuessAI</h1>
                {!isSelecting && <p className="header__subtitle">Choose a topic to begin the game, or press New Topics to generate new topics</p>}
            </header>
            <main className="main">
                {isSelecting ? (
                    <TopicsSelector
                        topics={selectedTopics}
                        setIsSelecting={setIsSelecting}
                        setSelectedTopics={setSelectedTopics}
                    />
                ) : (
                    <>
                        <h2 className="main__title">Try to guess...</h2>
                        <Cards />
                    </>
                )}
            </main>
            <footer className="footer">
                <p className="footer__text">
                    Copyright 2025 © <a className="footer__text-link" href="https://www.linkedin.com/in/anton-hryshchuk-247b4637a" target="_blank">Anton Hryshchuk</a>
                </p>
            </footer>
        </div>
    )
}