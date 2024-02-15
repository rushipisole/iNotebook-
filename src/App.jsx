import './App.css'
import {
  Route, Routes
} from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from './components/Home';
import About from "./components/About"
import {Alert} from './components/Alert';
import { NoteState } from "./context/NoteState";
// import { Alert } from 'bootstrap';



function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message="This is alert"/>
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </>

  )
}

export default App;
