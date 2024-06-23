import './App.css';
import {Routes,Route} from 'react-router-dom';
import Login from './Login';
import Details from './Details';
import Home from './Home';
import Attendance from './Attendance';
import VenueDetails from './VenueDetails';
import Query from './Query';
import Feed from './Feed';
import Guideline from './Guideline';
import Agenda from './Agenda';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path = '/home' element={<Home />} />
      <Route path='/details' element={<Details />} />
      <Route path='/attendance' element = {<Attendance />} />
      <Route path='/venuedetails' element={<VenueDetails />} />
      <Route path='/query' element={<Query />} />
      <Route path='/feed' element={<Feed />} />
      <Route path='/guide' element={<Guideline />} />
      <Route path='/agenda' element = {<Agenda />} />
    </Routes>
    
    
  );
}

export default App;
