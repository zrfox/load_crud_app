import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import type { TableProps } from "../types/TableProps";


function TableComponent({ columns, data }: TableProps) {
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(col => <TableCell key={col.key}>{col.label}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(row => (
                        <TableRow>
                            {columns.map(col => <TableCell key={col.key}>{String(row[col.key])}</TableCell>)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}

export default TableComponent;

// must cast key as a string since ts does not know row.id exists since data isn't grabbed
// from firebase until runtime. 
/*
function Table({ columns, data }: TableProps ) {
        return (
            <table>
                <thead>
                    <tr>
                        {columns.map(col => <th key={col.key}>{col.label}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr key={row.id as string}>
                            {columns.map(col => <td key={col.key}>{String(row[col.key])}</td>)}
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }


export default Table;
*/