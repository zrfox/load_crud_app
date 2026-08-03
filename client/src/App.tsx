import { Routes, Route } from 'react-router-dom'

import {
    DriverCreationPage, 
    DriverDetailsPage, 
    DriversPage, 
    LoadCreationPage, 
    LoadDetailsPage, 
    LoadsPage, 
    ProductCreationPage, 
    ProductDetailsPage, 
    ProductsPage, 
    ShipperCreationPage, 
    ShipperDetailsPage, 
    ShippersPage, 
    TruckCreationPage, 
    TruckDetailsPage, 
    TrucksPage
} from './pages/index'

function App() {
    return (
        <>
        <Routes>
            <Route path="/loads" element={<LoadsPage />} />
            <Route path="/loads/:id" element={<LoadDetailsPage />} />
            <Route path="/loads/create" element={<LoadCreationPage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/drivers/:id" element={<DriverDetailsPage />} />
            <Route path="/drivers/create" element={<DriverCreationPage />} />
            <Route path="/" element={<ProductsPage />} />
            <Route path="//:id" element={<ProductDetailsPage />} />
            <Route path="//create" element={<ProductCreationPage />} />
            <Route path="/" element={<ShippersPage />} />
            <Route path="//:id" element={<ShipperDetailsPage />} />
            <Route path="//create" element={<ShipperCreationPage />} />
            <Route path="/" element={<TrucksPage />} />
            <Route path="//:id" element={<TruckDetailsPage />} />
            <Route path="//create" element={<TruckCreationPage />} />
        </Routes>
        </>
    )
}

export default App
