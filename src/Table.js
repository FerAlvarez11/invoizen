import TableRows from "./TableRows";
import TableTotal from "./TableTotal";

function Table({setTableRowsValues, tableRowsValues, currency}) {
    const subtotal = tableRowsValues.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
    const total = subtotal + tableRowsValues.reduce((accumulator, currentValue) => accumulator + currentValue.taxAmount, 0);

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
        <div>
            <TableRows addRowValue={addRowValue} tableRowsValues={tableRowsValues} setTableRowsValues={setTableRowsValues} deleteRow={deleteRow} currency={currency}/> 
            <TableTotal subtotal={subtotal} tableRowsValues={tableRowsValues} total={total} currency={currency}/>
        </div>
    );
  }
  
  export default Table;
  