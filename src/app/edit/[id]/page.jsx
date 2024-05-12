import Image from "next/image";
import { sql } from "@vercel/postgres";
import Link from "next/link";

export default async function SingleMusicPost({ params }) {
  const result = await sql`SELECT * FROM MusicPost WHERE id = ${params.id}`;

  // if (result.rows.length === 0) {
  //   return <div> No MusicPost found for ID:{params.id}</div>;
  // }
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
        src={`/${MusicPost.id}.png`}
        alt={MusicPost.content}
        width={300}
        height={200}
      />
      <Link href={`/MusicPost/${params.id}/edit`}>Edit</Link>
    </div>
  );
}
