import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    const db = (await connectDB).db("Next");
    
    if(req.method == 'POST'){
        const { title, price } = req.body;

        // DB에 데이터 삽입
        await db.collection('post').insertOne({
            name: title,
            price: price
        });

        return res.status(201).send("Data inserted successfully");
    } else if(req.method == 'GET'){
        const data = await db.collection('post').find().toArray();
        return res.status(200).json(data);
    }
}