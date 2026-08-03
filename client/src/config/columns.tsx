import type { Column } from "../types/Column"

export const driverColumns: Column[] = [
    { label: 'ID', key: 'id' },
    { label: 'Full Name', key: 'fullName' },
    { label: 'Status', key: 'status' },
]

export const loadColumns: Column[] = [
    { label: 'ID', key: 'id' },
    { label: 'Status', key: 'status' },
    { label: 'Created At', key: 'createdAt' },
    { label: 'Origin', key: 'origin' },
    { label: 'Destination', key: 'destination' },
    { label: 'Cargo Description', key: 'cargoDescription' },
    { label: 'Pickup Date', key: 'pickupDate' },
    { label: 'Delivery Date', key: 'deliveryDate' },
    { label: 'Products', key: 'products' },
    { label: 'Shipper ID', key: 'shipperId' },
    { label: 'Driver', key: 'driverId' },
    { label: 'Rate', key: 'rate' },
    { label: 'Truck ID', key: 'truckId' },
    { label: 'Weight Lbs', key: 'weightLbs' },
]

export const productColumns: Column[] = [
    { label: 'ID', key: 'id' },
    { label: 'Product Name', key: 'productName' },
    { label: 'Type', key: 'type' },
]

export const shipperColumns: Column[] = [
    { label: 'ID', key: 'id' },
    { label: 'Shipper Name', key: 'shipperName' },
]

export const truckColumns: Column[] = [
    { label: 'ID', key: 'id' },
    { label: 'Gross Vehicle Weight', key: 'grossVehicleWeight' },
    { label: 'Height Ft', key: 'heightFt' },
    { label: 'Length Ft', key: 'lengthFt' },
    { label: 'License Plate', key: 'licensePlate' },
    { label: 'Make', key: 'make' },
    { label: 'Max Payload Lbs', key: 'maxPayloadLbs' },
    { label: 'Mileage', key: 'mileage' },
    { label: 'Model', key: 'model' },
    { label: 'Owner', key: 'owner' },
    { label: 'Status', key: 'status' },
    { label: 'Tare Weight', key: 'tareWeight' },
    { label: 'Type', key: 'type' },
    { label: 'VIN', key: 'vin' },
    { label: 'Width Ft', key: 'widthFt' },
    { label: 'Year', key: 'year' },
]