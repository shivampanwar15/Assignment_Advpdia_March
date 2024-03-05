import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from '../components/Header.jsx'

function Signup() {

    const [credentials, setcredentials] = useState({ name: "", email: "", password: "" })

    const [isChecked, setIsChecked] = useState(false);

    const navigate = useNavigate();

    const onChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value })
    }






    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!isChecked) {
            alert("Please Accept Terms & Conditions");
            return; 
        }
    
        const response = await fetch(`http://localhost:8000/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
    
        const json = await response.json();
        console.log(json);
        
        if (json.success) {
            navigate("/login");
        } else {
            alert("Enter valid Credentials");
        }
    }
    

    return (
        <>
            <Header />
            <div className="flex min-h-full flex-1 flex-col  px-6 py-12 lg:px-8  h-screen bg-gradient-to-l from-cyan-100 to-blue-100 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register !
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={credentials.name}
                                    onChange={onChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                Email          </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={credentials.email}
                                    onChange={onChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={credentials.password}
                                    onChange={onChange}
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="topping">
                                <input type="checkbox" id="T&C" name="checkbox" value={isChecked} checked={isChecked}
                                    onChange={() => {
                                        setIsChecked(!isChecked);
                                    }} /> Agree Terms & Conditions.
                            </div>

                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={
                                        handleSubmit
                                    }
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Click here to Login
                        </Link>
                    </p>
                </div>
            </div>


        </>
    )
}

export default Signup