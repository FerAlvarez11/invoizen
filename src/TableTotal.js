function TableTotal({subtotal, tableRowsValues, total}) {
  return (
    <table className="table is-bordered is-pulled-right mb-6">
        <tbody>
            <tr>
                <td><h1>Sub total </h1></td>
                <td><h1>{subtotal}</h1></td>
            </tr>
            {tableRowsValues.map((row, i) => {
                if(row.taxPercentage !== 0) {
                    return <tr key={`tax_key_${i}`}>
                        <td><h1>Tax ({row.taxPercentage}%)</h1></td>
                        <td><h1>{row.taxAmount}</h1></td>
                    </tr>
                }
                return null;
            })} 
            <tr>
                <td className="is-link"><h1>Total</h1></td>
                <td><h1>{total}</h1></td>
            </tr>
        </tbody>
    </table>
  );
}

export default TableTotal;
