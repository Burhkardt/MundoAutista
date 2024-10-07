import "./nav.css";
import logo from "../../assets/tmp.png";
export default function Navb() {
  return (
    <nav className="nav">
      <a style={{hover: "white"}} href="/">
        <img className="logo" src={logo} alt="" />
      </a>
      <li>
        <a href="Sobre">Sobre nós</a>
      </li>
      <li>
        <a href="Links"></a>
      </li>
      <li>
        <a href="#"></a>
      </li>
    </nav>
  );
}
