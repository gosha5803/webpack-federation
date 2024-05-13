import { createRoot } from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
// import { router } from './router/AppRouter'

var root = document.getElementById('root')

if(!root) {
    throw new Error('No root')
}

createRoot(root).render(
<BrowserRouter>
    <App/>
</BrowserRouter>
)