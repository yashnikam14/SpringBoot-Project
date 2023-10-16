import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import AddEmp from './components/AddEmp';
import EmployeeList from './components/EmployeeList';
import './App.css'
import UpdateEmployee from './components/UpdateEmployee';

function App() {

  return (
    <>
      <BrowserRouter>
      
          <Navbar />

          <Routes>

              <Route path="/" element={<EmployeeList/>} />
              <Route index element={<EmployeeList/>}/>
              <Route path='/employeeList' element={<EmployeeList/>}/>
              <Route path='/addEmp' element={<AddEmp/>}/>
              <Route path='/editEmployee/:id' element={<UpdateEmployee/>}/>

          </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
