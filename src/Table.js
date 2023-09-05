import { useState } from "react";
import TableRows from "./TableRows";
import TableTotal from "./TableTotal";

function Table() {
    const [tableRowsValues, setTableRowsValues] = useState([{
            itemDescription:"",
            quantity:1,
            rate:0,
            taxPercentage:0,
            amount:0,
            taxAmount:0,
        }
    ]);

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
            <TableRows addRowValue={addRowValue} tableRowsValues={tableRowsValues} setTableRowsValues={setTableRowsValues} deleteRow={deleteRow}/> 
            <TableTotal subtotal={subtotal} tableRowsValues={tableRowsValues} total={total}/>
        </div>
    );
  }
  
  export default Table;
  