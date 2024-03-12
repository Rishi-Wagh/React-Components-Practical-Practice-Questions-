import { Route , Routes } from 'react-router-dom';
import './App.css'
import Nav from './Naviagtion/nav';
import Table from './ResuableTableComponent/tableData';

function App() {


  return (
    <div className='main'>
       <Routes>
         <Route path='/' element={<Nav />} >
            <Route path='/table' element={<Table />} />
         </Route>
       </Routes>
    </div>
  )
}

export default App
