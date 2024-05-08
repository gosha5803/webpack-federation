import { FC, useState } from "react";
import * as cls from './App.module.scss'
import { Link, Outlet } from "react-router-dom";
import './App.scss'

export var App:FC = () => {
    var [counter, setCounter] = useState<number>(0)

    if(__PLATFORM__ === 'desktop') {
        return(
            <>
                <h1 className={cls['header']}>Admin App</h1>
                <button onClick={() => setCounter(counter => counter + 1)}>{counter}</button>
                <Link to={'/about'}>About</Link>
                <h2>This page was loaded with:{__LOADER__}</h2>
                <Outlet/>
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