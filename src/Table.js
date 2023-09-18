import TableRows from "./TableRows";
import TableTotal from "./TableTotal";
import currencyToSymbolMap from 'currency-symbol-map/map'

function Table({setTableRowsValues, tableRowsValues, currency, subtotal, total, handleCurrencyChange}) {
    const addRowValue = () => {
        let copyTableRowsValues = [...tableRowsValues, {
                itemDescription:"",
                quantity:1,
                rate:0,
                taxPercentage:0,
                amount:0,
                taxAmount:0,
            }]
        setTableRowsValues(copyTableRowsValues);
    }

    const deleteRow = (index) => {
        if(tableRowsValues.length > 0){           
            let copyAmountOfRows = [...tableRowsValues];
            copyAmountOfRows.splice(index, 1);  
            setTableRowsValues(copyAmountOfRows);  
        }
    }

    return (
        <div className="table_wrapper">
            <div className="select mb-2">
                <select onChange={handleCurrencyChange} defaultValue={currency[0]}>
                    {Object.entries(currencyToSymbolMap).map((value,key) => 
                        <option className="dropdown-item" key={key} value={value[0]}>
                            {value[0]} ({value[1]})
                        </option>
                    )}
                </select>
            </div>
            <TableRows addRowValue={addRowValue} tableRowsValues={tableRowsValues} setTableRowsValues={setTableRowsValues} deleteRow={deleteRow} currency={currency}/> 
            <TableTotal subtotal={subtotal} tableRowsValues={tableRowsValues} total={total} currency={currency}/>
        </div>
    );
  }
  
  export default Table;
  