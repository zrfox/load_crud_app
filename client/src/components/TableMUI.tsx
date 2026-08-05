import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import type { TableProps } from "../types/TableProps";


function TableMUI({ columns, data }: TableProps) {
    return (
        <>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {columns.map(col => <TableCell key={col.key}>{col.label}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(row => (

                    <TableRow key={row.id as string}>

                    {columns.map(col => {
                        const value = row[col.key];
                        return (
                            <TableCell key={col.key}>
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