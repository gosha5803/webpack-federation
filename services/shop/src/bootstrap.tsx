import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { App } from './App'

var root = document.getElementById('root')

if(!root) {
    throw new Error('No root')
}

createRoot(root).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)