import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import DataPage from './pages/dataPage';
import HomePage from './pages/dataSummaryPage';
import SettingPage from './pages/settingPage';
import DeletePage from './pages/deletePage';
import ActiveDeactivatePage from './pages/activeDeactivePage';
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
            <Route path='/data' element= {<DataPage/>} />
            <Route path='/create' element= {<CreatePage/>} />
            <Route path='/setting-edit' element= {<SettingPage/>} />
            <Route path='/setting-delete' element= {<DeletePage/>} />
            <Route path='/setting-active-deactive' element= {<ActiveDeactivatePage/>} />
          </Routes>
        </SideNavBar>
      </Router>
    </div>
  );
}

export default App;
