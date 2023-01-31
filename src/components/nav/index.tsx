import React, { Fragment, MouseEvent, MouseEventHandler, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";


interface Toogle {
    func: MouseEventHandler;
}

const Nav = (props:Toogle) => {
    return (
        <Fragment>
            <nav className="py-10 mb-12 flex justify-between">
                <h2 className="text-green-600-600 text-2xl md:text-3xl">L<span className="text-gray-800 dark:text-white">M</span></h2>
                <ul className="flex items-center gap-4">
                    <li><BsFillMoonStarsFill onClick={props.func} className="object-contain h-8 w-8 cursor-pointer md:text-4xl" /></li>
                    <li><a className="bg-green-600 text-white py-2 px-4 rounded-md text-sm md:py-4 md:px-6" href="#">Download CV</a></li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Nav;