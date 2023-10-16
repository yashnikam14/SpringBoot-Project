import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const {id} = useParams();

    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        fname: "",
        lname: "",
        emailId: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value })
    }

    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
                console.log(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchData();
    }, []);

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id).
        then((response) => {
            navigate("/employeeList");
        })
        .catch((error) =>{
            console.log(error);
        });
    }
    return (
        <>
            <div className='flex max-w-2xl shadow-lg border-b mx-auto'>
                <div className='px-8 py-8'>
                    <div className='font-thin text-2xl tracking-wider'>
                        <h1 className=''>Update Employee</h1>
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
                        <button onClick={updateEmployee} className='rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700'>Update</button>

                        <button onClick={() => {navigate('/employeeList')}} className='rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700'>Cancel</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default UpdateEmployee;
