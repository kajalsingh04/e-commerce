import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainBody from './components/MainBody'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Cart from './components/Cart'
import SignUp from './components/SignUp'
import ManagePass from './components/ManagePass'
import { ProductProvider } from './context/ProductContext'

function App() {

  return (
    <>
      <ProductProvider>
        <BrowserRouter>
          <div className="app-container">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<MainBody />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Cart' element={<Cart />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route path='/ManagePass' element={<ManagePass />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ProductProvider>
    </>
  )
}

export default App
