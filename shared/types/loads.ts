// interface represents shape of service's return value
// interfaces are typically named exports, like below

export interface Load {
    id: string;
    createdAt: string;
    cargoDescription: string;
    deliveryDate: string | null;
    destination: string;
    driverId: string | null;
    origin: string;
    pickupDate: string | null;
    products: {
        productId: string;
        quantity: number;
    }[]
    rate: number;
    shipperId: string;
    status: string;
    truckId: string | null;
    weightLbs: number;
}