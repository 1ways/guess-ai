import type { Dispatch, MouseEvent, SetStateAction, KeyboardEvent } from "react"

type TopicsSelectorProps = {
    topics: string[],
    setIsSelecting: (newValue: boolean) => void
    setSelectedTopics: Dispatch<SetStateAction<string[]>>
}

export default function TopicsSelector({ topics, setIsSelecting, setSelectedTopics }: TopicsSelectorProps) {
    const topicNames = ["Video Games", "Movies & TV Shows", "Music & Artists", "Books & Literature", "Superheroes & Villains", "History & Famous People", "Geography & Places", "Science & Inventions", "Animals & Nature", "Sports & Athletes"]

    function handleClick(e: MouseEvent<HTMLLIElement> | KeyboardEvent<HTMLLIElement>) {
        const value = e.currentTarget.textContent

        if (topics.includes(value)) {
            setSelectedTopics(prevValue => prevValue.filter(item => item != value))
        } else {
            setSelectedTopics(prevValue => [...prevValue, value])
        }
    }

    return (
        <div className="topics">
            <p className="topics__text">Choose your favorite topics:</p>
            <ul className="topics__list">
                {topicNames.map(topic => {
                    const isActive = topics.includes(topic)

                    return (
                        <li
                            className={`topics__list-item${isActive ? " active" : ""}`}
                            tabIndex={0}
                            onClick={handleClick}
                            onKeyDown={e => e.key === "Enter" ? handleClick(e) : ''}
                            key={topic}
                        >
                            {topic}
                        </li>
                    )
                })}
            </ul>
            <button
                className={`primary-btn${topics.length === 0 ? " outline" : ""}`}
                onClick={() => setIsSelecting(false)}
            >
                {topics.length === 0 ? "Skip" : "Next"}
            </button>
        </div>
    )
}