import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import Contacto from './pages/Contacto'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="productos" element={<Productos />} />
          <Route path="productos/categoria/:idCategoria" element={<Productos />} />
          <Route path="productos/:idProducto" element={<ProductoDetalle />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
