import 'dotenv/config'
import {z} from 'zod' 

const envEschema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production')
})

const _env = envEschema.safeParse(process.env)

if(_env.success === false) {
  console.error('Invalid enviroment variables!', _env.error.format())

  throw new Error('Invalid enviroment variables.9')
}

export const env = _env.data