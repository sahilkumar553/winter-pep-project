import NavBar  from "./components/NavBar";
import Home from "./components/Home";
import FormAction from "./components/FormAction";

import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';


const App=()=>{
  return(
    <div>
      <Router>
        <NavBar/>
          <Routes>
            <Route exact path="/Home" element={<Home/>}></Route>
            <Route exact path="/FormAction" element={<FormAction/>}></Route>
          </Routes>
      </Router>
    </div>
  )
}
export default App;