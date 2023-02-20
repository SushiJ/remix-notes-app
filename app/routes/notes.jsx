import { redirect } from "@remix-run/node"
import { useLoaderData } from "@remix-run/react"

import NewNote from "~/component/NewNote"
import NoteList from "~/component/NoteList"
import { getNotes, storeNotes } from "~/data/notes"

export default function NotesPage() {
  const notes = useLoaderData()

  return <main>
    <NewNote />
    <NoteList notes={notes} />
  </main>
}

// Backend functions
export async function loader() {
  const notes = await getNotes()
  return notes
}
// Only called when the request a not a GET request
// example a post request 
export async function action(data) {
  const formData = await data.request.formData()
  const noteData = Object.fromEntries(formData)

  const existingNotes = await getNotes();
  noteData.id = new Date().toISOString();

  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes)
  return redirect("/notes")

}
