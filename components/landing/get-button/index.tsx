'use client'

import { Button } from '@/components/ui/button'

export function GetButton() {
  const getHandler = async () => {
    const res = await fetch('/api/get?name=john', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()
  }

  return (
    <Button variant="outline" size="sm" className="mt-4" onClick={getHandler}>
      GET
    </Button>
  )
}
