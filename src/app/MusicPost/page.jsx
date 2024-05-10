import Image from "next/image";
import { sql } from "@vercel/postgres";
import Link from "next/Link";

export default async function Home() {
  const MusicPost = await sql`SELECT FROM MusicPost`;

  return (
    <div className="addmusic-container">
      <h2>Add favMusic</h2>
      {MusicPostposts.rows.map((MusicPost) => {
        return (
          <Link href={`/MusicPost/${MusicPost.i.d}`} key={MusicPost.id}>
            <h3>{MusicPost.artist}</h3>
            <p>{MusicPost.content}</p>
            <Image
              src={`/${MusicPost.album}.png`}
              alt={MusicPost.album}
              width={300}
              height={200}
            />
          </Link>
        );
      })}
    </div>
  );
}
