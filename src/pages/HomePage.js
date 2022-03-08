import { Link } from "react-router-dom";
const id = 10;

export default function HomePage() {
  return (
    <div>
      <h1>Application</h1>
      <Link to={`/link/${id}`}>Usuarios</Link>
    </div>
  );
}
