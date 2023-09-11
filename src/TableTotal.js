import { nanoid } from 'nanoid'

function TableTotal({subtotal, tableRowsValues, total, currency}) {
  return (
    <table className="table is-bordered is-pulled-right mb-6">
        <tbody>
            <tr>
                <td><h1>Sub total </h1></td>
                <td><h1>{currency[1]}{subtotal}</h1></td>
            </tr>
            {tableRowsValues.map((row, i) => {
                if(row.taxPercentage !== 0) {
                    return <tr key={nanoid()}>
                        <td><h1>Tax ({row.taxPercentage}%)</h1></td>
                        <td><h1>{currency[1]}{row.taxAmount}</h1></td>
                    </tr>
                }
                return null;
            })} 
            <tr>
                <td className="is-link"><h1>Total</h1></td>
                <td><strong>{currency[1]}{total}</strong></td>
            </tr>
        </tbody>
    </table>
  );
}

export default TableTotal;
