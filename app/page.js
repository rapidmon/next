import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function Home() {
  let name = "heelae"
  const db = (await connectDB).db("Next");
  const data = await db.collection('post').find().toArray();

  return (
    <main>
      <h4 className="title">애플 후레시</h4>
      <p className="title-sub">by Lim {name}</p>
      <div className="list-bg">
        {data.map((v, index) => (
          <div key={index} className="list-item">
            <Link prefetch={false} href={'/board/' + v._id}>
              <h4>{v.name}</h4>
            </Link>
            <Link href={'/edit/' + v._id}>수정</Link>
            <p>{v.price}</p>
            <form action="/api/delete/delete" method="POST">
              <input type="hidden" name="id" value={v._id.toString()} />
              <button type="submit" className="delete-btn">삭제</button>
            </form>
          </div>
        ))}
      </div> 
    </main>
  )
}
