import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Header from './components/Header/index.tsx'
import Catalog from './pages/Catalog/index.tsx'
import NewForm from './pages/NewForm/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    
    <BrowserRouter>
        
        <Header />

        <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="catalogs" element={<Catalog />} />
            <Route path="catalogs/:studentId" element={<NewForm />} />
        </Routes>
    </BrowserRouter>
)
