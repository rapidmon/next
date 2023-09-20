import { connectDB } from "@/util/database";
import ListClient from "./client";
import Link from "next/link";

export default async function List() {
    const db = (await connectDB).db("Next");
    const product = await db.collection('post').find().toArray();

    return (
        <div>
            <h4 className="title">상품목록</h4>
            <ul className="food-list">
                {product.map(({ _id, ...v}, index) => (
                    <li key={index} className="food">
                        <ListClient product={v} product_id={_id.toString()} /> 
                        <Link href={'/edit/' + _id}>수정</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}