import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import type { TableProps } from "../types/TableProps";


function TableMUI<T> ({ columns, data }: TableProps<T>) {
    return (
        <>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map(col => <TableCell key={String(col.key)}>{col.label}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(row => (
                    <TableRow key={row.id as string}>
                    {columns.map(col => {
                        const value = row[String(col.key)];
                        return (
                            <TableCell key={String(col.key)}>
                                {Array.isArray(value)
                                ? String(value.length)
                                : String(value)
                                }
                            </TableCell>
                        )
                    })}
                    </TableRow>
                  ))}
                    
                </TableBody>
            </Table>
        </>
    )
}

export default TableMUI;