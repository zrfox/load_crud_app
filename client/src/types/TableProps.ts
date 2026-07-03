import type { Column } from "./Column";

export interface TableProps {
    columns: Column[];
    // Record = string keys but values of any type.Good for our various types.
    data: Record<string, unknown>[];
}