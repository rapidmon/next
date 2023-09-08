import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"

export default async function Detail(props){
    const db = (await connectDB).db("Next")
    let result = await db.collection('post').findOne({_id: new ObjectId(props.params.id)})

    return(
        <div>
            <h4>상세페이지</h4>
            <h4>{result.name}</h4>
            <p>{result.price}</p>
        </div>
    )
}