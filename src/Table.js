import { useState } from "react";
import TableRows from "./TableRows";

function Table() {
    const [tableRowsValues, setTableRowsValues] = useState([]);

    // const amount = tableRowsValues[0].quantity * tableRowsValues[0].rate;

    // console.log(amount);

    const addRowValue = () => {
        let copyAmountOfRows = [...tableRowsValues, {
                itemDescription:"",
                quantity:0,
                rate:0,
                tax:0,
                amount:0,
            }]
        setTableRowsValues(copyAmountOfRows);
    }

    const deleteRow = (index) => {

        console.log(tableRowsValues,"here")


        if(tableRowsValues.length > 0){           
            let copyAmountOfRows = [...tableRowsValues];

            copyAmountOfRows.splice(index, 1);  
            console.log(copyAmountOfRows,"2");

            setTableRowsValues(copyAmountOfRows);  
        }
    }

    return (
        <div>
            <TableRows addRowValue={addRowValue} tableRowsValues={tableRowsValues} setTableRowsValues={setTableRowsValues} deleteRow={deleteRow}/> 
            <h1>Sub total: </h1>
            {tableRowsValues.map((row, i) => {
                    if(row.tax !== 0) {
                        return <h1 key={`tax_key_${i}`}>Tax: {row.tax}%</h1> 
                    }
                return null;
            })} 
            <h1>Total:</h1>
        </div>
    );
  }
  
  export default Table;
  