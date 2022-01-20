import Darkmode from "../Darkmode/darkmode";

function Navbar() {
  return (
    <nav className="nav-bar">
      <Darkmode />
      <a href="#">Home</a>

      <a href="#">Resources</a>
    </nav>
  );
}

export default Navbar;
