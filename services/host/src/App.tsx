import { FC, useState } from "react";
import { MainPage } from "./Pages/MainPage";
import cls from './App.module.scss'
import { Link } from "react-router-dom";
import { AppRouter } from "./router/AppRouter";
import '@packages/shared/src/styles/app.scss'

export var App:FC = () => {
    var [counter, setCounter] = useState<number>(0)
    console.log(cls)

    if(__PLATFORM__ === 'desktop') {
        return(
            <>
                {/* <h1 className={cls['header']}>App</h1> */}
                <button onClick={() => setCounter(count => count + 1)}>Count is:{counter}</button>
                <MainPage/>
                {/* <Link to={'/admin'}>Admin</Link>
                <Link to={'/'}>Main</Link>
                <Link to={'/shop'}>Shop</Link> */}
                <AppRouter/>
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