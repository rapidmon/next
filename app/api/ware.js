import { connectDB } from "@/util/database";

export default async function Ware(req, res){
    const db = (await connectDB).db("Next");
    const data = await db.collection('post').find().toArray();

    res.status(200).json({items: data});
}