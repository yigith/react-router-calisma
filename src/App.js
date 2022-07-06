import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-marka">React Router Çalışma</div>

      <nav>
        <Link to="/">Anasayfa</Link>{" | "}
        <Link to="/hakkinda">Hakkında</Link>{" | "}
        <Link to="/iletisim">İletişim</Link>
      </nav>

      <Outlet />

      <footer>
        Her hakkı saklıdır &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
