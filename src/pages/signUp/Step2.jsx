import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { mainContext } from '../../context/MainContext';

const Step2 = () => {
    const navigate = useNavigate();
    const { signUp, setSignUp } = useContext(mainContext);
    const handleStep = e => {
        e.preventDefault();
        const form = e.target;
        setSignUp({
            ...signUp,
            phone_number: form.code.value + form.phone.value,
            email: form.email.value
        })
        navigate('/signup/step3')

    }

    return (
        <form onSubmit={handleStep} className='space-y-[66px]'>
            <div className="flex gap-2  text-[16px]">
                <input type="text" name='code' className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-[90px] pl-5' placeholder='+880' />
                <input type="tel" name='phone' className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='1xxxxxxxxx' />
            </div>
            <input type="email" name='email' className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write Email Address' />
            <div className="">
                <Link to='/signup'>Back</Link>
                <button
                    type='submit'
                    className='w-[142px] ml-[69px] h-[49px] inline-block color-main leading-[49px] text-center rounded-[10px] font-[500] text-white shadow-md shadow-gray-400'
                >
                    Next Step
                </button>
            </div>
        </form>
    );
};

export default Step2;