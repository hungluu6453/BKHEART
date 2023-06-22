import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';
// import { Header, Feature, Example } from './components';
import './App.css'

function App() {
  return (
    <div>
        <Router basename='/bkheart'>
        <div >
        <Routes>
          <Route exact path="/" element = {<HomePage />}></Route>
          <Route path="/chat" element={<ChatPage />}></Route>
          {/* <Route path="/#header-section" element={<Header />}></Route>
          <Route path="/#feature-section" element={<Feature />}></Route>
          <Route path="/#example-section" element={<Example />}></Route> */}
        </Routes>
        </div>
    </Router>
    </div>
  )
}

export default App