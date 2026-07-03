import type { TableProps } from "../types/TableProps";

// must cast key as a string since ts does not know row.id exists since data isn't grabbed
// from firebase until runtime. 
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