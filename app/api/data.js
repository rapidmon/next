import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    let client;
    try {
        client = await connectDB();
        const db = client.db('Next')
        const result = await db.collection('post').find().toArray();
        res.json({ data: result });
    } catch (error) {
        res.status(500).json({ error: 'Database connection or query failed.' });
    } finally {
        if (client) {
            client.close();
        }
    }
}