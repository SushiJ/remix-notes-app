import { Link } from "@remix-run/react";
export default function Index() {
  return (
    <div className="">
      <h1>Take notes</h1>
      <p>
        <Link to="/notes">Notes</Link>
      </p>
    </div>
  );
}
