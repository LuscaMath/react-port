import React, { Fragment, MouseEvent, MouseEventHandler, useState } from "react";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';


const MainPage = () => {
    return (
        <Fragment>
            <div className="text-center p-5">
                <h2 className="text-green-600 text-3xl py-2 md:text-6xl">Lucas Matheus</h2>
                <h3 className="text-black text-xl py-2 md:text-3xl md:text-gray-500">Desenvolvedor e Web Designer</h3>
                <p className="text-md text-gray-800 py-5 md:text-xl max-w-lg mx-auto dark:text-gray-300">Tem um projeto em mente? Entre em contato!</p>
            </div>
            <div className="flex justify-center text-4xl text-green-600 gap-4">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillGithub />
            </div>
            <div className="flex justify-center mt-10">
                <img className="object-contain h-80 w-80 rounded-full border-solid border-4 border-gray-800 lg:h-96 lg:w-96" src="../../../public/profile-pic.png" alt="" />
            </div>
        </Fragment>
    )
}

export default MainPage;        