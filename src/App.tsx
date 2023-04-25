import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ContextProvider from './context/Context'
import Loading from './components/Loader';

const Home = React.lazy(() => import('./webpages/Home'));
const Login = React.lazy(() => import('./webpages/Login'));
const Profile = React.lazy(() => import('./components/Profile'));
const WheelOfFortune = React.lazy(() => import('./components/WheelOfFortune'));
const TreasureHunt = React.lazy(() => import('./components/TreasureHunt'));
// const WordSearch = React.lazy(() => import('./components/WordSearch'));
const Jigsaw = React.lazy(() => import('./components/Jigsaw'));
const Details = React.lazy(() => import('./webpages/Details'));




export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter >
        <Suspense fallback={<div><Loading /></div>}>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/destination/:destination' element={<Details />} />
            <Route path='/destination/:destination/game/wheel' element={<WheelOfFortune />} />
            <Route path='/destination/:destination/game/treasure-hunt' element={<TreasureHunt />} />
            {/* <Route path='/destination/:destination/game/word-search' element={<WordSearch />} /> */}
            <Route path='/destination/:destination/game/jigsaw' element={<Jigsaw />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ContextProvider>
  )
}