import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import Layout from './components/Layout'


function App() {
  return (
    <div className="main">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
