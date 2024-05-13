import { FC, useState } from "react";
import PngAvatar from '@/assets/avatar.png'
import CalendarSvg from '@/assets/calendar.svg'
import { MyButton } from '@packages/shared/src/ui/MyButton/ui/MyButton'

var AboutPage: FC = () => {
    var [color, setColor] = useState<'orange' | 'blue'>('orange')
    var switchColor = () => setColor(prev => prev == 'blue' ? 'orange' : 'blue')

    return(
        <div>
            Admin Remote Page
            Admin Remote Page
            <img src={PngAvatar} width={200}/>
            <h2 style={{color}}>This app was loaded by: {__LOADER__} loader</h2>
            <CalendarSvg color={color} onClick={() => switchColor()} height={100} width={100}/>
            <MyButton onClick={() => switchColor()}>Hello</MyButton>
        </div>
    )
}

export default AboutPage