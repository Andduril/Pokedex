import React, { Suspense } from 'react'
import Navigation from './components/Navigation/Navigation'
import SideMenu from './components/Navigation/SideMenu/SideMenu'
import { Route, Routes, useLocation } from 'react-router-dom'
import Loading from './pages/LoadingPage/LoadinPage'
import { AnimatePresence, motion } from 'framer-motion'
import './App.scss'

const HomePage = React.lazy(async () => await import('./pages/HomePage/HomePage'))
const PokemonsPage = React.lazy(async () => await import('./pages/PokemonsPage/PokemonsPage'))
const PokemonPage = React.lazy(async () => await import('./pages/PokemonPage/PokemonPage'))
const MovePage = React.lazy(async () => await import('./pages/MovePage/MovePage'))

const App = () => {
  const location = useLocation()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}>
      <header>
        <SideMenu>
          <Navigation />
        </SideMenu>
      </header>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route
            path='/'
            element={
              <Suspense
                fallback={
                  <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Loading />
                  </motion.main>
                }
              >
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <HomePage />
                </motion.main>
              </Suspense>
            }
          />
          <Route
            path='/pokemons'
            element={
              <Suspense
                fallback={
                  <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Loading />
                  </motion.main>
                }
              >
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <PokemonsPage />
                </motion.main>
              </Suspense>
            }
          />
          <Route
            path='/pokemon/:pokemonId'
            element={
              <Suspense
                fallback={
                  <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Loading />
                  </motion.main>
                }
              >
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <PokemonPage />
                </motion.main>
              </Suspense>
            }
          />
          <Route
            path='/moves/:moveId'
            element={
              <Suspense
                fallback={
                  <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <Loading />
                  </motion.main>
                }
              >
                <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <MovePage />
                </motion.main>
              </Suspense>
            }
          />
        </Routes>
      </AnimatePresence>
      {/* <footer>
        <span>Made by <a href="https://github.com/Andduril">Andduril</a></span>
      </footer> */}
    </div>
  )
}

export default App
