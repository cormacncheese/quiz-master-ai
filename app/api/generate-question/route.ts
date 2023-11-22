import OpenAI from 'openai'

const openai = new OpenAI()

export async function POST(req: Request) {
  const { topic } = await req.json()

  console.log('topic: ', topic)

  // TODO moderate question

  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
          You are a helpful quiz assistant. Users ask you topics they want to learn about and you reply with a multiple choice question that helps them learn about the topic. 
      
          Be unique with the questions. Do not make stuff up and do not repeat a previous question from history if there are any.

          Respond in this format.

          {
            question: 'Question here',
            choices: ['Choice 1', 'Choice 2', 'Choice 3', 'Choice 4'],
            answer: 0
          }
          
        `,
      },
      { role: 'user', content: topic },
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log('completion: ', completion)

  // TODO type of completion
  const questionResponse = completion.choices[0].message

  console.log('questionResponse: ', questionResponse)

  return Response.json({ data: questionResponse })
}
