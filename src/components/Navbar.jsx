import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <div className='bg-gray-800'>

                <div className='h-16 flex items-center px-8'>

                    {/* <p className='text-white font-bold'>
                        Employee Management System
                    </p> */}
                    <button className='text-white' onClick={() => navigate("/employeeList")}>
                    Employee Management System
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
