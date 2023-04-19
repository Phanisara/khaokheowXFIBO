import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './pages/dataPage';
import EditPage from './pages/editPage';
import CreatePage from './pages/createPage';
import SideNavBar from './components/SideBar';
import './index.css'

function App() {
  return (
    <div className='container'>
      <Router>
        <SideNavBar>
          <Routes>
            <Route path='/' element= {<HomePage/>} />
            <Route path='/edit' element= {<EditPage/>} />
            <Route path='/create' element= {<CreatePage/>} />
          </Routes>
        </SideNavBar>
      </Router>
    </div>
  );
}

export default App;
