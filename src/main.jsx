import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import EnergiasPage from './pages/EnergiasPage.jsx'
import Home from './pages/Home.jsx'
import EnergiaDetailPage from './pages/EnergiaDetailPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Contato from './pages/Contato.jsx'
import { register } from 'swiper/element/bundle'
register();


const router = createBrowserRouter ([{
  path: '/',
  element: <App />,
  children: [
    { index: true, element: <Home /> },
    { path: 'energias', element: <EnergiasPage /> },
    { path: 'energias/:id', element: <EnergiaDetailPage /> },
    { path: '/contato', element: <Contato /> },
    { path: '*', element: <PageNotFound /> },
  ],
},])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
