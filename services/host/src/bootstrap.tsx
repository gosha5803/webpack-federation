import {createRoot} from 'react-dom/client'
import { App } from './App'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { router } from './router/AppRouter'

var root = document.getElementById('root')

if(!root) {
    throw new Error('No root')
}

createRoot(root).render(<RouterProvider router={router}/>)

