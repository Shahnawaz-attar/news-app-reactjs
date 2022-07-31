import Navbar from './components/Navbar'
import News from './components/News'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  
    return (
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Routes>
            <Route exact  path="/" element={<News key={"general"} pageSize={10} country={'in'} category={'general'} />} />
            <Route exact  path="/business" element={<News key={"business"} pageSize={10} country={'in'} category={'business'} />} />
            <Route exact  path="/entertainment" element={<News key={"entertainment"} pageSize={10} country={'in'} category={'entertainment'} />} />
            <Route exact  path="/health" element={<News key={"health"} pageSize={10} country={'in'} category={'health'} />} />
            <Route exact  path="/science" element={<News key={"science"} pageSize={10} country={'in'} category={'science'} />} />
            <Route exact  path="/sports" element={<News key={"sports"} pageSize={10} country={'in'} category={'sports'} />} />
            <Route exact  path="/technology" element={<News key={"technology"} pageSize={10} country={'in'} category={'technology'} />} />
          </Routes>
        </div>
      </BrowserRouter>
    )
 
}

export default App

