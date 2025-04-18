import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
import { GlobalContext } from './context/context.tsx'
createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <GlobalContext>
            <App />
        </GlobalContext>
    </BrowserRouter>
)
