import { FC } from "react";
import * as cls from './MyButton.module.scss'
import '../../../styles/App.scss'

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'secondary'
}

export const MyButton: FC<MyButtonProps> = ({children, variant, ...rest}) => {

    return(
        <button className={`${cls.MyButton} ${cls[variant]}`} {...rest}>
            {children}
        </button>
    )
}