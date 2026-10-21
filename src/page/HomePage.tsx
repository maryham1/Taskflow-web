import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <main>
      <h1>TaskFlow</h1>
      <p>Simple task management to help you stay organized.</p>

      <nav>
        <Link to="/terms">Terms of Service</Link>
        {" | "}
        <Link to="/privacy">Privacy Policy</Link>
      </nav>
    </main>
  );
}
