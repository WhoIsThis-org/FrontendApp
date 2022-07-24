import Footer from './component/Footer/footer';
import Navbar from './component/NavBar/navbar';
import Search from './component/Search/Search';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './component/Dashboard/Dashboard';


function App() {
  return (
    <div >
      <Navbar />
      {/* See Your Output Here ! */}
      <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Search />} />
          <Route path="/user/:address" caseSensitive={false} element={<Dashboard />} />
        </Routes>
      </Router>
      <Footer />

    </div>
  );
}

export default App;
