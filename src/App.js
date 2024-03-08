import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// git config --global user.name "IAmApurrv"
// git config --global user.email "iamapurrv.com"

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails/>} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path='/'>
              <Home />
            </Route> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
