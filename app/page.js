import { connectDB } from "@/util/database";

export default async function Home() {

  const client = await connectDB;
  const db = client.db('Next')
  let result = await db.collection('post').find().toArray();
  console.dir(result[0].title);

  let name = "heelae"
  return (
    <main>
      <h4 className="title">애플 후레시</h4>
      <p className="title-sub">by Lim {name}</p>
    </main>
  )
}
