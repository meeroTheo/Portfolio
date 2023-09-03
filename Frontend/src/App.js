import "./styles.css";
import Landing from "./components/Landing";
import ContactForm from "./components/ContactForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/contact" element={<ContactForm />}></Route>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
