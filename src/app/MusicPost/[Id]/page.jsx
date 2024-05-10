import Image from "next/image";
import { sql } from "@vercel/postgres";
import Link from "next/Link";

export default async function SingleMusicPost({ params }) {
  const result = await sql`SELECT FROM MusicPost WHERE id = ${params.id}`;
  const MusicPost = result.rows[0];

  return (
    <div className="Id-container">
      <h2>{MusicPost.album}</h2>
      <p>{MusicPost.music}</p>
      <h2>{MusicPost.artist}</h2>
      <p>{MusicPost.name}</p>
      <h2>{MusicPost.genre}</h2>
      <p>{MusicPost.type}</p>
      <h2>{MusicPost.year}</h2>
      <p>{MusicPost.when}</p>
      <h2>{MusicPost.content}</h2>
      <p>{MusicPost.description}</p>
      <Image
        src={`/${MusicPost.album}.png`}
        alt={MusicPost.album}
        width={300}
        height={200}
      />
      <Link href={`/Music${params.id}/edit`}>Edit</Link>
    </div>
  );
}
