export async function askAI(prompt: string) {
    const res = await fetch("/.netlify/functions/askAI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
    })

    if (!res.ok) {
        const err = await res.text()
        throw new Error(`API error ${res.status}: ${err}`)
    }

    const data = await res.json()
    return data.text
}
