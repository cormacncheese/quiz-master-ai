'use client'

import { Button } from '@/components/ui/button'

export function PostButton() {
  const postHandler = async () => {
    const res = await fetch('/api/post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'John Doe' }),
    })

    const data = await res.json()
  }

  return (
    <Button variant="outline" size="sm" className="mt-4" onClick={postHandler}>
      POST
    </Button>
  )
}
