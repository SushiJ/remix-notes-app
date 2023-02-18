import { Link } from "@remix-run/react";
export default function Index() {
  return (
    <main className="text-2xl flex text-center items-center flex-col my-2">
      <h1 className="text-4xl">Take notes</h1>
        <Link className="bg-teal-600 hover:bg-teal-500 rounded-md m-4 p-2" to="/notes">Notes</Link>
    </main>
  );
}
