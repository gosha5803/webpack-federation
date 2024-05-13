import { MyButton } from '@packages/shared/src/ui/MyButton/ui/MyButton'
import { calc } from '@packages/shared/index'
import { useState } from 'react'

var SecondPage:React.FC = () => {
    var [color, setColor] = useState<'orange' | 'blue'>('blue')
    var switchColor = () => setColor(color === 'blue' ? 'orange' : 'blue') 

    return (
        <>
            <h2 style={{color}}>Second Page Shop</h2>
            <MyButton variant='secondary' onClick={() => switchColor()}>Switch color</MyButton>
        </>
    )
}

export default SecondPage