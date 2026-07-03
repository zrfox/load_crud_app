// interface represents shape of service's return value
// interfaces are typically named exports, like below

export interface Load {
    id: string;
    createdAt: string;
    cargoDescription: string;
    status: string;
    pickupDate: string | null;
    deliveryDate: string | null;
    origin: string;
    destination: string;
    products: {
        productId: string;
        quantity: number;
    }[]
    driverId: string | null;
    rate: number;
    shipperId: string;
    truckId: string | null;
    weightLbs: number;
}