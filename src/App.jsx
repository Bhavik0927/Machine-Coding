import React from 'react'
import ECart from './Components/E-Cart';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart';
import Tabs from './Components/tabs';
import DragDrop from './Components/Drag&Drop';
import Quiz from './Components/QuizApp/Quiz';

const App = () => {

  const tabData = [
    {
      label:'Profile',
      content: <div>👤 Profile Content</div>
    },
    {
      label:'Business',
      content: <div>🧑‍💼 Business Content </div>
    },
    {
      label:'Setting',
      content: <div>♨️ Setting Content</div>
    }
  ] 

    

  return (
    // <Router>
    //   <Routes>

    //     <Route path='/' element={<ECart />} />
    //     <Route path='/Cart' element={<Cart />} />

    //   </Routes>
    // </Router>


    <div style={{padding:'20px'}}>
      <h2>Simple Content tabs</h2>
      <Tabs tabs={tabData} />
    </div>
    //  <DragDrop />

    // Quiz app
    // <Quiz/>

  )
}

export default App;