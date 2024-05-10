import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function SingleMusicPost({ params }) {
  const result = await sql`SELECT FROM MusicPost WHERE id = ${params.id}`;
  const MusicPost = result.rows[0];

  async function editForm(formData) {
    "user server";

    const album = formData.get("album");
    const artist = formData.get("artist");
    const genre = formData.get("genre");
    const year = formData.get("year");
    const content = formData.get("content");

    await sql`UPDATE MusicPosts SET album=${album}), artist=${artist}), genre=${genre}), year=${year}, content =${content} WHERE id = ${params.id}`;

    revalidatePath("/MusicPosts)");
    revalidatePath(`/MusicPosts/${params.id}`);

    redirect(`/MusicPosts/${params.id}`);
  }

  return (
    <div className="edit-container">
      <h2>Edit MusicPost</h2>
      <form action={editMusicPost}>
        <label htmlFor="album">Album</label>
        <input artist="album" id="album" placeholder="Album" />
        <label htmlFor="artist">Artist</label>
        <input artist="artist" id="artist" placeholder="Artist" />
        <button>Subit Changes</button>
      </form>
    </div>
  );
}
