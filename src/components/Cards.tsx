import { useEffect, useState } from "react"
import Loader from "./Loader"
import { askAI } from "../service/ai"
import { getTopicsPrompt } from "../prompts/gamePrompts"
import { useNavigate } from "react-router"

type CardsProps = {
    selectedTopics: string[]
}

export default function Cards({ selectedTopics }: CardsProps) {
    // States
    const [isLoading, setIsLoading] = useState(false)
    const [topics, setTopics] = useState([])

    const navigate = useNavigate()

    // Functions
    function generateTopics() {
        setIsLoading(true)

        const prompt = getTopicsPrompt(selectedTopics)

        console.log(prompt)

        askAI(prompt)
            .then(res => {
                setTopics(JSON.parse(res))
                setIsLoading(false)
            })
            .catch(err => console.log("Error:" + err))
    }

    useEffect(() => {
        generateTopics()
    }, [])

    function openChat(topic: string) {
        navigate('chat', {
            state: {
                topic: topic
            }
        })
    }

    if (isLoading || topics.length === 0) {
        return <Loader text="Generating new topics..." />
    }

    return (
        <div className="main__cards-wrapper">
            <ul className="main__cards">
                {
                    topics.map(topic => (
                        <li
                            className="main__cards-item"
                            tabIndex={0}
                            key={topic}
                            onClick={() => openChat(topic)}
                        >{topic}</li>
                    ))
                }
            </ul>
            <button className="primary-btn" onClick={generateTopics}>New Topics</button>
        </div>
    )
}