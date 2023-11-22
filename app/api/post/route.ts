export default async function POST(req: Request) {
  const { name } = await req.json()

  return Response.json({ data: `Hello ${name}` })
}
