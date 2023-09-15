import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    const db = (await connectDB).db("Next");
    const data = await db.collection('post').find().toArray();

    let name_list = data.map((v) => {
        return v.name;
    })

    if(req.method == 'POST'){
        // DB에 데이터 삽입
        if(req.body.name == ''){
            return res.status(500).json("please write product name");
        } else if(req.body.price == ''){
            return res.status(500).json("please write product price");
        } else if(name_list.includes(req.body.name)){
            return res.status(500).json("The product is in use. Please write a different product name");
        }
        try {
            console.log(req.body);
            await db.collection('post').insertOne(req.body);
    
            return res.status(201).redirect('/');
        } catch (error) {
            return error;
        }
    }
}