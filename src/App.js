
import React, { useState, createContext } from 'react'
import Header from './header'
import Middle from './middle'
import Footer from './footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

export const Ctx = createContext()

export default function App() {
   const [dark, setDark] = useState(0)
   return (
      <Container className='p-0 m-0' fluid >
         <Ctx.Provider value={[dark, setDark]}>
            <Header />
            <Middle />
            <Footer/>
         </Ctx.Provider>
      </Container>
   )
}