import fs from "fs/promises";

// Reading the file with notes
export async function getNotes() {
  const fileContentRaw = await fs.readFile("notes.json", { encoding: 'utf8' });
  const data = JSON.parse(fileContentRaw);
  const storedNotes = data.notes ?? [];
  return storedNotes
}

// Writing to a file
export function storeNotes(notes) {
  return fs.writeFile("notes.json", JSON.stringify({ notes: notes || [] }));
}
