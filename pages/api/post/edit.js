import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Next");

    if(req.method == 'POST'){
        // DB에 데이터 삽입
        if(req.body.name == ''){
            return res.status(500).json("please write product name");
        } else if(req.body.price == ''){
            return res.status(500).json("please write product price");
        }

        try {
            await db.collection('post').updateOne({_id: new ObjectId(req.body.id)}, {$set: {
                    name: req.body.name,
                    price: req.body.price
                }
            });
    
            return res.status(201).redirect('/');
        } catch (error) {
            return error;
        }
    }
}