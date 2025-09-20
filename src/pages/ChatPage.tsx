import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import arrowIcon from '../assets/arrow.svg'
import Loader from '../components/Loader'

type Message = {
    sender: 'user' | 'ai',
    text: string
}

export default function ChatPage() {
    const location = useLocation()
    // States
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState<Message[]>([])
    const chatBottom = useRef<HTMLDivElement | null>(null)

    const topic: string = location.state.topic

    function sendMessage(message: string) {
        setMessages(prevMessages => [...prevMessages, { sender: "user", text: message }])
        setMessage('')
    }

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            if (e.code === 'Enter' && message.trim() !== '') {
                sendMessage(message)
            }
        }

        window.addEventListener('keydown', onKeyDown)

        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [message])

    useEffect(() => {
        console.log(chatBottom.current?.scrollIntoView())
    }, [messages])

    return (
        <div className="container container-main">
            <header className="chat-header">
                <p className="chat-header__title">GuessAI</p>
            </header>
            <main className="main">
                <div className="chat">
                    <div className="chat__body">
                        <h1 className="chat__body-title"><span>Topic:</span> {topic}</h1>
                        <div className="chat__messages">
                            {messages.length === 0 ? (
                                <h2 className="chat__messages-title">Start asking questions</h2>
                            ) : (
                                messages.map((message, index) => {
                                    const isUser = message.sender === 'user'
                                    const sender = isUser ? 'user' : 'ai'

                                    return <div
                                        className={`chat__messages-item chat__messages-item--${sender}`}
                                        key={index}
                                    >
                                        <p
                                            className="chat__messages-sender"
                                        >
                                            {sender === 'user' ? 'You' : 'AI'}
                                        </p>
                                        <div className="chat__messages-box">
                                            <p className="chat__messages-text">{message.text}</p>
                                        </div>
                                    </div>
                                })
                            )}
                            <div ref={chatBottom}></div>
                        </div>
                    </div>
                    <div className="chat__footer">
                        <input
                            className="chat__footer-input"
                            type="text"
                            placeholder="Ask something..."
                            value={message}
                            onChange={(e) => setMessage(e.currentTarget.value)}
                        />
                        <button
                            className={`chat__footer-btn primary-btn${message.trim() === "" ? " hidden" : ""}`}
                            onClick={() => sendMessage(message)}
                        >
                            <img className="chat__footer-arrow" src={arrowIcon} alt="Send Icon" />
                        </button>
                        {/* <Loader text="Thinking" /> */}
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