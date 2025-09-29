import { Fragment } from 'react/jsx-runtime'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Particles from './components/Reactbits/Particles/Particles'
import { useState } from 'react'

function App() {
  const [isItemSelected, setIsItemSelected] = useState(0);
  const handleClickMenuItem = (index: number) => {
    setIsItemSelected(index);
  }
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0
      }}>
        <Particles
          particleColors={['#ffffff', '#33ffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div style={{
          position: 'relative',
          zIndex: 1,
          color: 'white',
          textAlign: 'center'
        }}>
        <Fragment >
          <Header selectedNavItem={handleClickMenuItem}></Header>
          <Home index={isItemSelected}></Home>
        </Fragment>
      </div>

    </div>
    
  )
}

export default App
