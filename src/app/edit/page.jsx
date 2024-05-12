import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Link from "next/link";
import MusicPost from "../MusicPost/page";

export default async function editMusicPost({ params }) {
  const result = await sql`SELECT FROM MusicPost WHERE id = ${params.id}`;
  console.log(params.id);
  // const editForm = result.rows[0];

  async function editMusicPost(formData) {
    "use server";

    const album = formData.get("album");
    const artist = formData.get("artist");
    const genre = formData.get("genre");
    const year = formData.get("year");
    const content = formData.get("content");

    await sql`UPDATE MusicPost SET album=${album}, artist=${artist}, genre=${genre}, year=${year}, content =${content} WHERE id = ${params.id}`;

    revalidatePath("/MusicPost");
    revalidatePath(`/MusicPost/${params.id}`);

    redirect(`/MusicPost/${params.id}`);
  }

  return (
    <div className="edit-container">
      <h2>Edit MusicPost</h2>
      <nav>
        <Link href="/SingleMusicPost">SingleMusicPost</Link>
      </nav>
      <form action={editMusicPost}>
        <label htmlFor="album">Album</label>
        <input
          album="album"
          id="album"
          placeholder="Album"
          defaultValue={MusicPost.album}
        />

        <label htmlFor="artist">Artist</label>
        <input
          artist="artist"
          id="artist"
          placeholder="Artist"
          defaultValue={MusicPost.artist}
        />

        <label htmlFor="genre">Genre</label>
        <input
          genre="genre"
          id="genre"
          placeholder="Genre"
          defaultValue={MusicPost.genre}
        />

        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          placeholder="Year"
          defaultValue={MusicPost.album}
        />

        <label htmlFor="content">Content</label>
        <input
          content="content"
          id="content"
          placeholder="Content"
          defaultValue={MusicPost.year}
        />

        <button>Submit Changes</button>
      </form>
    </div>
  );
}
