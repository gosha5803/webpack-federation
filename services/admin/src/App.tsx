import { FC, useState } from "react";
import * as cls from './App.module.scss'
import { Link } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export var App:FC = () => {
    if(__PLATFORM__ === 'desktop') {
        return(
            <>
                <h1 className={cls['header']}>Admin App</h1>
                <h2>This page was loaded with:{__LOADER__}</h2>
                <Link to={'about'}>About</Link>
                <Link to={'second'}>Second</Link>
                <AppRouter/>
                {/* <Outlet/> */}
            </>
        ) 
    } else {
        return(
            <>
                <h1>Mobile Build</h1>
            </>
        )
    }
}