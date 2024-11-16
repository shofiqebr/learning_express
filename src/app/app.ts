

import express, { Request, Response } from 'express'
const app = express()
const port = 3000

app.get('/', (req : Request, res : Response) => {
  res.send('Hello friends we are in the house!')
})

export default app