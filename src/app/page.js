import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const MusicPost = await sql`SELECT FROM MusicPost`;

  return (
    <div className="home-container">
      <h2>Home</h2>
      {MusicPostposts.rows.map((posts) => {
        return (
          <div key={MusicPost.id} className="MusicPost">
            <h3>{MusicPost.artist}</h3>
            <p>{MusicPost.content}</p>
            <Image
              src={`/${MusicPost.album}.png`}
              alt={MusicPost.album}
              width={300}
              height={200}
            />
          </div>
        );
      })}
    </div>
  );
}
