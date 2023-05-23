import { FastifyInstance } from "fastify";
import { prisma } from "../libs/prisma";

{/* Aula 2 times 1.27.08 */}
export async function memoriesRoute(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories =  await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      }
    })
    return memories.map(memory => {
      return {
        id: memory.id,
        coverUrl: memory.converUrl,
        excerpt: memory.content.substring(0, 115).concat('...')
      }
    })
  })

  app.get('/memories/:id', async () => {
    
  })

  app.post('/memories', async () => {
    
  })

  app.put('/memories/:id', async () => {
    
  })
  app.delete ('/memories/:di', async () => {
    
  })
}