import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

var container = document.getElementById('root')
if(!container) {
    throw new Error('No root')
}

var root = createRoot(container)
root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

