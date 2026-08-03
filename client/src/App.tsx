import { Routes, Route } from 'react-router-dom'
import LoadCreationPage from './pages/LoadCreationPage'
import LoadsPage from './pages/LoadsPage'
import LoadDetailsPage from './pages/LoadDetailsPage'

function App() {
    return (
        <>
        <Routes>
            <Route path="/loads" element={<LoadsPage />} />
            <Route path="/loads/:id" element={<LoadDetailsPage />} />
            <Route path="/loads/create" element={<LoadCreationPage />} />
        </Routes>
        </>
    )
}

export default App
