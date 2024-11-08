import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MovieListPage from './pages/MovieListPage.jsx'
import Home from './pages/Home.jsx'
import MovieDetailPage from './pages/MovieDetailPage.jsx'
import GenreListPage from './pages/GenreListPage.jsx'
import MoviesByGenrePage from './pages/MoviesByGenrePage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Contato from './pages/Contato.jsx'
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const router = createBrowserRouter ([{
  path: '/',
  element: <App />,
  children: [
    { index: true, element: <Home /> },
    { path: 'movies', element: <MovieListPage /> },
    { path: 'movies/:id', element: <MovieDetailPage /> },
    { path: 'genre', element: <GenreListPage /> },
    { path: 'genre/:id', element: <MoviesByGenrePage /> },
    { path: '/contato', element: <Contato /> },
    { path: '*', element: <PageNotFound /> },
  ],
},])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
