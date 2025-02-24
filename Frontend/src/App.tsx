import SignUp from "./pages/SignUp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from "./pages/Longin";
const App = function App() {
  return (
    <Router>
 
<Routes>
<Route path="/" element={<Login/>}/>
<Route path="/signup" element={<SignUp/>}/>
</Routes>

    </Router>

  )
}

export default App;
