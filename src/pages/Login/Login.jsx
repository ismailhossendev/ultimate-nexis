import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from "../../asset/image/image.png"
import logo from "../../asset/logo/logo.png"
import Swal from 'sweetalert2'

const Login = () => {
    const [error, setError] = React.useState("");
    const navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault();
        setError("")

        const password = e.target.password.value;
        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }
        fetch("https://test.nexisltd.com/login ", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: e.target.email.value,
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    Swal.fire({
                        title: 'Error!',
                        text: data.error,
                        icon: 'error',
                        confirmButtonText: 'try login'
                    })
                    navigate('/login')
                } else {
                    Swal.fire({
                        title: 'congratulations!',
                        text: data.success,
                        icon: 'success',
                        confirmButtonText: 'confirm'
                    })
                    console.log(data);
                    localStorage.setItem('token', data.access_token)
                }

            })
            .catch(err => console.log(err))

    }
    return (
        <div className='w-full h-screen container mx-auto p-2'>
            <div className="mt-[62px]">
                <img className='w-[164px] h-[60px]' src={logo} alt="" />
            </div>
            <div className="flex lg:flex-row flex-col-reverse">
                <div className="lg:w-1/2">
                    <img className='w-full h-[500px]' src={image} alt="" />
                </div>
                <div className="lg:w-1/2 text-center">
                    <h2 className='text-[20px] font-semibold'>Login Form</h2>
                    <div className="md:w-[630px] md:px-[74px] mx-auto mt-[99px]">
                        <form onSubmit={handleSignUp} className='space-y-[66px]'>
                            <input type="email" name="email" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write Email Address' />

                            <div>
                                <input type="password" name="password" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write Password' />
                                {error && <p className='text-[#7E7E7E] text-start pl-5'>{error}</p>}
                            </div>
                            <div className="">
                                <button
                                    className='w-[142px] ml-[69px] h-[49px] inline-block color-main leading-[49px] text-center rounded-[10px] font-[500] text-white shadow-md shadow-gray-400'
                                >
                                    Login
                                </button>
                            </div>
                            <p>Don’t have an account?
                                <Link to='/signup' className='text-[#1678CB] underline text-[14px] font-semibold'> SIGNUP HERE!</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;