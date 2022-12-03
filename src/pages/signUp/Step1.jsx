import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../../context/MainContext';

const Step1 = () => {
    const { setSignUp } = useContext(mainContext);
    return (
        <form className='space-y-[66px]'>
            <input
                onBlur={e => setSignUp(pre => ({ ...pre, first_name: e.target.value }))}
                type="text" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write First Name'
            />

            <input
                onBlur={e => setSignUp(pre => ({ ...pre, last_name: e.target.value }))}
                type="text" className='placeholder:text-[#B4B4B4] focus:outline-none border-b border-gray-400 w-full pl-5' placeholder='Write Last Name'
            />
            <div className="">
                <Link to='/signup/step2'
                    className='w-[142px] h-[49px] inline-block color-main leading-[49px] text-center rounded-[10px] font-[500] text-white shadow-md shadow-gray-400'
                >
                    Next Step
                </Link>
            </div>
            <p>Already have an account?
                <Link to='/login' className='text-[#1678CB] underline text-[14px] font-semibold'> LOGIN HERE!</Link>
            </p>
        </form>
    );
};

export default Step1;