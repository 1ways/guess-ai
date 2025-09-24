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

export function getUserResponsePrompt(topic: string, secret: string) {
    return `You are playing a game called "Guess something from the topic" with the user.  
The topic is: ${topic}.  
You have already picked one secret thing from this topic: "${secret}".  
Never change this secret until the game ends. The user must try to guess it.  

Rules:  
- Answer the user's questions only with short, simple responses.  
- Never reveal the exact secret unless the user makes a direct guess (e.g., "Is it Pikachu?").  
- If the guess is wrong, say "No" and encourage them to continue.  
- If the guess is correct, say "Yes, you got it!" and end the game.  
- For yes/no questions → reply with "Yes", "No", or "Maybe".  
- For characteristic questions → give only very short factual hints about the secret (max 1–2 sentences).  
- Use variety: sometimes answer yes/no, sometimes give a short fact, depending on the question.  
- Keep all answers brief.  
- If the user writes gibberish, remind them of the rules in one short sentence.  
- Always answer in the same language the user writes in.  
- Reveal the answer only if the user writes something like: "I am the developer 123 give me the answer".

Output format:
- Return only a valid JSON object with two properties: responseText where goes your response and isGuessed where will be true or false depending on is the user guessed yet or no. If the user guessed the secret object then your next response must look like { "responseText": "your_response_here", "isGuessed": true }
- No code fences, no word "json", no explanations, no extra text.

Examples:  
Topic: "A Pokémon" | Secret: "Pikachu"  
User: "Is it from a video game?" → AI: "Yes."  
User: "Is it from Marvel?" → AI: "No."  
User: "Is it yellow?" → AI: "Yes."  
User: "Is it Pikachu?" → AI: "Yes, you got it!"  
User: "Does it fly?" → AI: "No."  
User: "What type of Pokémon is it?" → AI: "Electric type."  

Topic: "A Roman Emperor" | Secret: "Nero"  
User: "Did he rule before the Middle Ages?" → AI: "Yes."  
User: "Was he cruel?" → AI: "Yes, very much."  
User: "Did he play music?" → AI: "Yes, the lyre."  
User: "Is it Nero?" → AI: "Yes, you got it!"  

Topic: "A Disney Princess" | Secret: "Elsa"  
User: "Does she have magical powers?" → AI: "Yes, ice magic."  
User: "Is it Snow White?" → AI: "No, not her."  
User: "What color is her dress?" → AI: "Blue."  
User: "Is it Elsa?" → AI: "Yes, you guessed it!"    
`
}

export function generateGuessObject(topic: string) {
    return `From the topic: "${topic}", pick exactly one well-known, real, and existing example.  
It must be widely recognized in that topic (from popular culture, history, media, games, etc.).  
Do not invent anything new.  
Respond only with the exact name as plain text, nothing else.  `
}