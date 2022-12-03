import React from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mainContext } from '../../context/MainContext';
import Swal from 'sweetalert2'

const Step3 = () => {
    const [error, setError] = React.useState("");
    const { signUp } = useContext(mainContext);
    const navigate = useNavigate();
    const handleSignUp = e => {
        e.preventDefault();
        setError("")
        const password = e.target.password.value;
        if (password.length < 8) {
            setError("Password must be at least 8 characters long");
            return;
        }
        fetch("https://test.nexisltd.com/signup ", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                ...signUp,
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

                }

            })
            .catch(err => console.log(err))

    }
    return (
        <form onSubmit={handleSignUp} className='space-y-[66px]'>
            <div>
                <input type="password" name="password" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write Password' />
                {error && <p className='text-[#7E7E7E] text-start pl-5'>{error}</p>}
            </div>
            <div className="">
                <Link to='/signup/step2'>Back</Link>
                <button
                    className='w-[142px] ml-[69px] h-[49px] inline-block color-main leading-[49px] text-center rounded-[10px] font-[500] text-white shadow-md shadow-gray-400'
                >
                    SignUp
                </button>
            </div>
        </form>
    );
};

export default Step3;