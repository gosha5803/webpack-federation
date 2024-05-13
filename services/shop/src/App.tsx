import { FC, useState } from "react";
import * as cls from './App.module.scss'
// import { AppRouter } from "./router/AppRouter";
import { Link, Outlet } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";

export var App:FC = () => {
    var [counter, setCounter] = useState<number>(0)

    if(__PLATFORM__ === 'desktop') {
        return(
            <>
                <h1 className={cls['header']}>Shop Application?</h1>
                <h2>
                    {__LOADER__}
                </h2>
                <button onClick={() => setCounter(count => count + 1)}>Count is:{counter}</button>
                <AppRouter/>     
                <Link to={'main'}>Main</Link>
                <Link to={'second'}>Second</Link>

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