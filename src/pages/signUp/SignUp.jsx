import React from 'react';
import { Outlet } from 'react-router-dom';
import image from "../../asset/image/image.png"
import logo from "../../asset/logo/logo.png"
const SignUp = () => {
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
                    <h2 className='text-[20px] font-semibold'>SignUp Form</h2>
                    <div className="md:w-[630px] md:px-[74px] mx-auto mt-[99px]">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;