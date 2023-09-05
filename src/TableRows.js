import TableRow from "./TableRow";
import currencyToSymbolMap from 'currency-symbol-map/map'

console.log(currencyToSymbolMap);

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
                    </tr>
                </thead>
                <tbody>
                    {tableRowsValues.map((row, i) => <TableRow key={`key_${i}`} i={i} deleteRow={deleteRow} tableRowsValues={tableRowsValues} setTableRowsValues={setTableRowsValues}/>)}
                </tbody>
            </table>
            <button className="button is-primary mr-4" onClick={addRowValue}>
                <span className="icon">
                    <i className="fa-regular fa-square-plus"></i>
                </span>
                <span>Add Item Line</span>
            </button>
            <div className="dropdown is-hoverable">
                <div className="dropdown-trigger">
                    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                        <span>Select Currency</span>
                        <span className="icon is-small">
                            <i className="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            <p>You can insert <strong>any type of content</strong> within the dropdown menu.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default TableRows;
  