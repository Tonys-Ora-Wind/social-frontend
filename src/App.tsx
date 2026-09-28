import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//component
import Explore from './Components/Explore/Explore';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import UserProfile from './Components/UserProfile/UserProfile';
import Navbar from './Components/Navbar/Navbar';
import Feed from './Components/Feed/Feed';
import CreatePost from './Components/Posts/CreatePost';
// import Post from './Components/Posts/Post';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/explore' element={<Explore />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user/:userId' element={<UserProfile />} />
          <Route path='/feed' element={<Feed />} />
          <Route path='/create' element={<CreatePost />} />
          {/* <Route path='/post' element={<Post />} /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App;
