import { Form } from "@remix-run/react";

export default function NewNote() {
  return <Form method="post" className="flex flex-col items-center my-4 bg-gray-600 rounded-md  max-w-3xl mx-auto">
    <p className="text-2xl flex flex-col items-center my-2 text-gray-100">
      <label className="text-3xl my-2" htmlFor="title">Title</label>
      <input className="rounded-md text-teal-800" type="text" name="title" required />
    </p>
    <p className="text-2xl flex flex-col items-center my-6 text-gray-100">
      <label className="text-3xl my-2" htmlFor="content">Body</label>
      <textarea className="rounded-md text-teal-800" name="content" rows="10" cols="40" required />
    </p>
    <button className="bg-teal-600 hover:bg-teal-500 rounded-md m-4 p-2 text-gray-100">
      Add Note
    </button>
  </Form>
}
