import { connectDB } from "@/util/database";
import ListClient from "./client";

export default async function List() {
    const db = (await connectDB).db("Next");
    const product = await db.collection('post').find().toArray();

    return (
        <div>
            <h4 className="title">상품목록</h4>
            <ul className="food-list">
                {product.map(({ _id, ...v}, index) => (
                    <ListClient key={index} product={v} /> 
                ))}
            </ul>
        </div>
    )
}