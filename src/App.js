import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}></Route>
            <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
            <Route path="terms-of-use" element={<TermsOfUse />}></Route>
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
