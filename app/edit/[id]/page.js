import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function Edit(props){
    const db = (await connectDB).db("Next");
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id)})
    
    return(
        <div>
            <h4>글수정</h4>
            <form action="/api/post/edit" method="POST">
                <input type="hidden" name="id" value={props.params.id} />
                <h5>제목</h5>
                <input name="name" className="title" type="text" defaultValue={result.name}></input>
                {/* <h5>사진</h5>
                <input name="image" className="image" type="file" defaultValue={result.image}></input> */}
                <h5>내용</h5>
                <textarea name="price" className="text" defaultValue={result.price}></textarea>
                <button type="submit">등록</button>
            </form>
            <form action="/api/time" method="GET">
                <button type="submit">시간</button>
            </form>
        </div>
    )
}