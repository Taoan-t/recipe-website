import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">Home Page</Link>
      <p>User name</p>
    </header>
  );
}

export default Header;
