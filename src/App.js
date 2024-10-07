import "./styles.css";
import Navb from "./components/Navbar/Navbar";
import AppRoutes from "./components/Routes";

export default function App() {
  return (
    <div className="App">
      <Navb />
      <div className="background">
        <AppRoutes />
      </div>
    </div>
  );
}
