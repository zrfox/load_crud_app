import type { Driver } from "./drivers";
import type { Load } from "./loads";
import type { Product } from "./products";
import type { Shipper } from "./shippers";
import type { Truck } from "./trucks";

// EntityKey used in Column type in client to maintain exact spelling for keys. 
// EntityKey can be any property name in the keyof types. Equivalent to typing a union of all property names in all types. 
export type EntityKey = keyof Driver | keyof Load | keyof Product | keyof Shipper | keyof Truck;