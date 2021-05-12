import {connect} from './database';

export interface DBResponse {
    data: any;
    error: boolean;
}

export async function executeSimpleQuery(query: string, params: Array<any>): Promise<DBResponse> {
    try {
        const conn = await connect();
        const posts = await conn.query(query, params);
        conn.end();
        return {
            data: posts[0],
            error: false
        };
    }
    catch (e) {
        return {
            data: e,
            error: true
        };
    }
}