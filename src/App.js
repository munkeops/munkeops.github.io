
import React from 'react'
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home.js'
// import Blogs from './pages/blogs.js'
// import Admin from './auth/admin'
import About from './pages/about'
import Projects from './pages/project-dev'
import CustomTab from './components/customtab'

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // useParams,
  // Link,
  // Redirect,
  // browserHistory
} from 'react-router-dom';
//basename={process.env.PUBLIC_URL}>
function App() {

  // const [posts,setPosts]=useState([])
  return (
    <div className="App">
      
    
    <Router > 
            <Route exact path='/'><Home/></Route>
            {/* <Route exact path='/'><Home/></Route> */}

            {/* <Route exact path='/blogs'><Blogs posts={posts} setPosts={setPosts}/></Route> */}
            {/* <Route exact path='/travel'><Blogs section="travel"/></Route> */}
            {/* <Route exact path='/projects'><Blogs section="travel"/></Route> */}
            {/* <Route exact path='/movies'><Blogs section="travel"/></Route> */}

            <Route exact path='/projects'><Projects/></Route>

            <Route exact path='/about'><About/></Route>
            {/* <Route exact path='/admin'><Admin posts={posts} setPosts={setPosts}/></Route> */}
            

    </Router>

    </div> 
  );
}

export default App;

