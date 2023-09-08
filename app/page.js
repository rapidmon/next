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
            <p>{v.price}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
