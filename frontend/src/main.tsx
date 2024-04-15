import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index.tsx'
import Header from './components/Header/index.tsx'
import SearchPage from './pages/SearchPage/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    
    <BrowserRouter>
        
        <Header />

        <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="find" element={<SearchPage />} />
        </Routes>
    </BrowserRouter>
)
