import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: '54.145.155.23',
        user: 'crunchy',
        password: 'Upb2021**',
        database: 'crunchylist',
        port: 3306
        // host: 'localhost',
        // user: 'root',
        // password: '123456',
        // database: 'crunchylist'

    });
    return connection;
}