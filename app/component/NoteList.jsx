export default function NoteList({ notes }) {
  return (
    <ul className="flex justify-start max-w-3xl my-2 mx-auto flex-wrap items-start gap-2">
      {notes.map((note, idx) => (
        <li className="bg-gray-600 rounded-md p-2">
          <article>
            <header>
              <ul>
                <li className="text-xl text-gray-300 text-center flex justify-between my-2">
                  #{idx + 1}
                  <li className="mx-4 text-xs my-auto text-gray-400">
                    <span className="mx-2">
                      
                    </span>
                    <time dateTime="{note.id}">
                      {new Date(note.id).toLocaleString("en-IN", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </time>
                  </li>
                </li>
              </ul>
              <h2 className="text-xl text-gray-200 my-2">{note.title}</h2>
            </header>
            <p className="text-xl text-gray-300">{note.content}</p>
          </article>
        </li>
      ))}
    </ul>
  )
}
