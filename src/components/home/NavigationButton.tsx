import React from 'react'
import { NavLink } from 'react-router-dom';

type NavigationButtonPropsType = {
    children: React.ReactNode;
    to: string;
}

export default function NavigationButton({to, children}: NavigationButtonPropsType) {
    return (
        <NavLink
            to={to}
            className=" border-white border-2 rounded-full p-1 "
        >
            {children}
        </NavLink>
    );
}