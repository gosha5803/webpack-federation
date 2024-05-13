import { FC } from "react";
import * as cls from './App.module.scss'

export var App:FC = () => {
    return(
        <h1 className={cls['App']}>Hello react App</h1>
    )
}