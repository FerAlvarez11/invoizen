import TableRow from "./TableRow";

function TableRows({addRowValue, tableRowsValues, setTableRowsValues, deleteRow}) {

    return (
        <div className="table is-bordered">
            <table className="table is-bordered table is-fullwidth">
                <thead className="is-primary">
                    <tr>
                        <th>Item Description</th>
                        <th><abbr title="Quantity">Qty</abbr></th>
                        <th>Rate</th>
                        <th>Tax</th>
                        <th>Amount</th>
                        <th className="has-text-centered">
                             <button className="button is-primary" onClick={addRowValue}>
                                <span className="icon">
                                    <i className="fa-regular fa-square-plus"></i>
                                </span>
                                <span>Add Item Line</span>
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tableRowsValues.map((row, i) => <TableRow key={`key_${i}`} i={i} deleteRow={deleteRow} tableRowsValues={tableRowsValues} setTableRowsValues={setTableRowsValues}/>)}
                </tbody>
            </table>
        </div>
    );
  }
  
  export default TableRows;
  