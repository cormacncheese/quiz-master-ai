'use client'

import { InputForm } from './components/input-form'
import QuestionForm from './components/question-form'
import { useToast } from '@/components/ui/use-toast'
import { useState } from 'react'
import { Question } from '@/lib/types'
import NextButtons from './components/next-buttons'

export function QuestionAnswerForm() {
  const { toast } = useToast()

  const [topic, setTopic] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [question, setQuestion] = useState<Question>({
    question: 'What is the main purpose of the Java programming language?',
    choices: [
      'To create web applications',
      'To develop mobile apps',
      'To write system software',
      'To design databases',
    ],
    answer: 2,
  })

  const generateQuestion = async () => {
    if (!topic) {
      toast({
        title: 'Topic is required',
        description: 'Please enter a topic to learn about',
      })
      return
    }

    setIsLoading(true)

    try {
      const res = await fetch('/api/generate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic }),
      })

      const data = await res.json()
      const newQuestion = data?.data.content.trim()

      console.log('newQuestion: ', newQuestion)

      if (!newQuestion) {
        throw new Error('No question')
      }

      setQuestion(newQuestion)
    } catch (e) {
      console.log('e: ', e)
      toast({
        title: 'Error',
        description: 'Something went wrong',
      })
    }

    // set topic state
    // send topic state as POST to nextjs funciton

    setIsLoading(false)
  }

  return (
    <>
      <InputForm
        generateQuestion={generateQuestion}
        topic={topic}
        setTopic={setTopic}
      />
      <QuestionForm question={question} />
      <NextButtons handleClick={generateQuestion} />
    </>
  )
}
