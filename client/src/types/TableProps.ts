import type { Column } from "./Column";

export interface TableProps<T> {
    columns: Column<T>[];
    // Record = string keys but values of any type.Good for our various types.
    data: Record<string, unknown>[];
}