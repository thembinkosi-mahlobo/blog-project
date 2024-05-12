import Image from "next/image";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function Home() {
  const MusicPost = await sql`SELECT * FROM MusicPost`;

  return (
    <div className="Music-container">
      <h2>Music Blog</h2>
      <nav>
        <Link href="/MusicPost">MusicPost</Link>
      </nav>
      {MusicPost.rows.map((MusicPost) => {
        return (
          <Link href={`/MusicPost/${MusicPost.id}`} key={MusicPost.id}>
            <h3>{MusicPost.artist}</h3>
            <p>{MusicPost.content}</p>
            <Image
              src={`/image/${MusicPost.id}.png`}
              alt={MusicPost.content}
              width={300}
              height={200}
            />
          </Link>
        );
      })}
    </div>
  );
}
