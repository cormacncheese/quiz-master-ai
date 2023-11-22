'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

type Props = {
  generateQuestion: () => void
  topic: string
  setTopic: (topic: string) => void
}

export function InputForm({ generateQuestion, topic, setTopic }: Props) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input
        type="topic"
        placeholder="Us History"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Button onClick={generateQuestion}>Start Quiz</Button>
    </div>
  )
}
