import { Button } from '@/components/ui/button'

type Props = {
  handleClick: () => void
}

export default function NextButtons({ handleClick }: Props) {
  return (
    <div className="my-4">
      <Button variant="outline" onClick={handleClick}>
        Next
      </Button>
    </div>
  )
}
