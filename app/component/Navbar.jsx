import { NavLink } from "@remix-run/react";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 justify-center py-4">
        <li>
          <NavLink className="p-2 hover:text-teal-500" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink className="p-2 hover:text-teal-500" to="/notes">Notes</NavLink>
        </li>
      </ul>
    </nav >
  )
}
