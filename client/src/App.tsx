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
            <Route path="/" element={<LoadsPage />} />
            <Route path="/loads" element={<LoadsPage />} />
            <Route path="/loads/:id" element={<LoadDetailsPage />} />
            <Route path="/loads/create" element={<LoadCreationPage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/drivers/:id" element={<DriverDetailsPage />} />
            <Route path="/drivers/create" element={<DriverCreationPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="//:id" element={<ProductDetailsPage />} />
            <Route path="/products/create" element={<ProductCreationPage />} />
            <Route path="/shippers" element={<ShippersPage />} />
            <Route path="/shippers/:id" element={<ShipperDetailsPage />} />
            <Route path="/shippers/create" element={<ShipperCreationPage />} />
            <Route path="/Trucks" element={<TrucksPage />} />
            <Route path="/Trucks/:id" element={<TruckDetailsPage />} />
            <Route path="/Trucks/create" element={<TruckCreationPage />} />
        </Routes>
        </>
    )
}

export default App
