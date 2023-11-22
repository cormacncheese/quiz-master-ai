import { Question } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

type Props = {
  question: Question
}

export default function QuestionForm({ question }: Props) {
  const { toast } = useToast()

  const handleAnswer = (index: number) => {
    if (index === question.answer) {
      toast({
        title: 'Correct',
        description: 'You got it right!',
      })
      console.log('correct')
    } else {
      toast({
        title: 'Incorrect',
        description: 'Please try again',
      })
    }
  }

  return (
    <div className="my-4">
      <p className="text-lg  mb-2"> {question.question}</p>

      <div className="flex flex-col gap-1">
        {question &&
          question?.choices?.map((choice, index) => (
            <div key={index}>
              <Button variant="outline" onClick={() => handleAnswer(index)}>
                {choice}
              </Button>
              {/* <input type="radio" id={choice} name="choice" value={choice} />
          <label htmlFor={choice}>{choice}</label> */}
            </div>
          ))}
      </div>
    </div>
  )
}
