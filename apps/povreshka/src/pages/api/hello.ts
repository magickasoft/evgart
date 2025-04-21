// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const apiHandler = async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json({ name: 'John Doe' })
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

export default apiHandler
