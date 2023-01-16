import './App.css';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';

function RC() {
  const hrefs = useLocation()
  return <p>
    {`current path [${window.location.origin+hrefs.pathname}]`}
  </p>
}
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className='App-header'>
          <RC/>
        </header>
        <div style={{background:'black', color:'white', height:'calc(100% - 50px)', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <Routes>
            <Route path='/' element={<><div><Link to={'/aaa'} children={<>aaa</>} /></div><div><Link to={'/bbb'} children={<>bbb</>} /></div></>}></Route>
            <Route path='/aaa' element={<div>aaa</div>}></Route>
            <Route path='/bbb' element={<div>bbb</div>}></Route>
        </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
