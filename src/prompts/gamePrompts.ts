export const generateTopicsPrompt = `
Generate 3 simple and fun short ideas for the game "Guess the topic".

Requirements:
- Keep the topics broad and easy to understand for most people.
- Avoid niche or overly specific topics (like currencies, minor characters, or obscure trivia).
- Focus on popular and familiar areas: movies, cartoons, video games, music, history, animals.
- Make sure the topics are diverse and not repeated.
- Examples of good topics: "A Disney princess", "A Pokémon", "A superhero from Marvel", "An animal you can find in a zoo".

Output format:
- Return only a valid JSON array of strings.
- No code fences, no word "json", no explanations, no extra text.
`