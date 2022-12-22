//import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar'
import Layout2 from './componants/Layout2'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NoteState from './context/layout/LayoutState';
import AddLayout from './componants/AddLayout';
import Layout3 from './componants/Layout3';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<AddLayout/>} />
              <Route exact path="/Layout2" element={<Layout2/>} />
              <Route exact path="/card" element={<Layout3/>} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
