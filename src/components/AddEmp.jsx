import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmp = () => {

    const [employee, setEmployee] = useState({
        id: "",
        fname: "",
        lname: "",
        emailId: "",
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value })
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then(
            (response) => {
                console.log(response);
                navigate("/employeeList")
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            fname: "",
            lname: "",
            emailId: "",
        })
    }
    return (
        <>
            <div className='flex max-w-2xl shadow-lg rounded my-5 border-b mx-auto'>
                <div className='px-8 py-8'>
                    <div className='font-thin text-2xl tracking-wider'>
                        <h1 className=''>Add New Employee</h1>
                    </div>
                    <div className='items-center justify-center h-14 w-full my-4'>
                        <label htmlFor="" className='block text-gray-600 text-small font-normal'>First Name</label>
                        <input onChange={(e) => handleChange(e)} name='fname' value={employee.fname} type="text" className='h-10 w-96 border mt-2 px-2 py-2' />
                    </div>

                    <div className='items-center justify-center h-14 w-full my-6'>
                        <label htmlFor="" className='block text-gray-600 text-small font-normal'>Last Name</label>
                        <input onChange={(e) => handleChange(e)} type="text" name='lname' value={employee.lname} className='h-10 w-96 border mt-2 px-2 py-2' />
                    </div>

                    <div className='items-center justify-center h-14 w-full my-6 '>
                        <label htmlFor="" className='block text-gray-600 text-small font-normal'>Email</label>
                        <input onChange={(e) => handleChange(e)} type="email" name='emailId' value={employee.emailId} className='h-10 w-96 border mt-2 px-2 py-2' />
                    </div>

                    <div className='items-center justify-center h-14 w-full my-6 space-x-4 pt-4 '>
                        <button onClick={saveEmployee} className='rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700'>Save</button>

                        <button onClick={reset} className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700'>Clear</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddEmp
