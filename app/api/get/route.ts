export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const name = searchParams.get('name')

  console.log('name: ', name)

  return Response.json({ data: 'Hello World' })
}
