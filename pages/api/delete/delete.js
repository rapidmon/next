import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    const db = (await connectDB).db("Next");
    
    if(req.method == 'POST'){
        try {
            const postId = new ObjectId(req.body.id);
            await db.collection('post').deleteOne({_id: postId});
            return res.status(201).redirect('/');
        } catch (error) {
            console.error("Error while deleting post:", error); // 오류 로그 추가
            return res.status(500).json({ error: 'Failed to delete post' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}