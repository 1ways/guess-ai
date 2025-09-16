type LoaderProps = {
    text: string
}

export default function Loader({ text }: LoaderProps) {
    return (
        <div className="loader">
            <p className="loader__text">{text}</p>
        </div>
    )
}