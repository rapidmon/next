import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import fetch from 'node-fetch';

export default async function handler(req, res) {
    const db = (await connectDB).db("Next");
    
    if(req.method === 'DELETE'){
        try {
            // imgBB에서 이미지 삭제
            await fetch(req.body.url, {
                method: 'GET'
            }).then((res) => {
                console.dir(res);
                res.querySelector('.link.link--delete').click();
                if (!res.ok) {
                    throw new Error("Failed to delete image from imgBB");
                }
            });
            
            const postId = new ObjectId(req.body.id);
            await db.collection('post').deleteOne({_id: postId});
            return res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            console.error("Error while deleting post:", error);
            return res.status(500).json({ error: 'Failed to delete post' });
        }
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}