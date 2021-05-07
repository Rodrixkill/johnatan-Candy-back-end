import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'localhost',
        user: 'root',
        password: 'andriuch09',
        database: 'crunchylist'
    });
    return connection;
}

export async function executeSimpleQuery(query: string, params: Array<any>): Promise<any> {
    try {
        const conn = await connect();
        const posts = await conn.query(query, params);
        conn.end();
        return posts[0];
    }
    catch (e) {
        console.log(e)
        return e;
    }
}


