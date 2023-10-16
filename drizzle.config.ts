import type {Config} from 'drizzle-kit'
import * as dotnev from 'dotenv'
import path from 'path'
dotnev.config( {path: '.env'})

export default {
    driver: 'pg',
    schema: './src/lib/db/schema.ts',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL ,
    },
    } satisfies Config