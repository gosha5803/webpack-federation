import { createRoot } from 'react-dom/client'
import { App } from './app/App'

var container = document.getElementById('root')
if(!container) throw new Error('NO ROOT')

var root = createRoot(container)
root.render(<App/>)