import Nav from './components/Nav'
import Main from './components/Main'
import Error from './pages/Error'


import {Routes, Route, useLocation} from 'react-router-dom'
import PortfolioId from './pages/PortfolioId';

function App() {

  const location = useLocation();


  return (
    <div className="container">
      <Nav location={location}/>
      <Routes >
        <Route path="/" element={<Main/>} ></Route>
        <Route path="/pid/:pid" element={<PortfolioId/>} ></Route>
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
    
  );
}

export default App;
