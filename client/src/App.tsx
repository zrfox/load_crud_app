import { Routes, Route } from 'react-router-dom'
import CreateLoadPage from './pages/CreateLoadPage'
import LoadsPage from './pages/LoadsPage'
import LoadDetailsPage from './pages/LoadDetailsPage'


function App() {
    return (
        <Routes>
            <Route path="/" element={<LoadsPage />} />
            <Route path="/loads/:id" element={<LoadDetailsPage />} />
            <Route path="/loads/create" element={<CreateLoadPage />} />
        </Routes>
    )
}

export default App
