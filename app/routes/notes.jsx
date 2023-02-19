import { redirect } from "@remix-run/node"
import NewNote from "~/component/NewNote"
import { getNotes, storeNotes } from "~/data/notes"

export default function NotesPage() {
  return <main className="">
    <h1><NewNote /></h1>
  </main>
}

// Only called when the request a not a GET request
// example a post request 
// Backend function
export async function action(data) {
  const formData = await data.request.formData()
  const noteData = Object.fromEntries(formData)

  const existingNotes = await getNotes();
  noteData.id = new Date().toISOString();

  const updatedNotes = existingNotes.concat(noteData);
  await storeNotes(updatedNotes)
  return redirect("/notes")

}
