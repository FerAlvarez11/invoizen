import { useState, useEffect } from "react";
import TableRows from "./TableRows";

function Table() {
    const [tableRowsValues, setTableRowsValues] = useState([]);

    const subtotal = tableRowsValues.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
    const total = subtotal + tableRowsValues.reduce((accumulator, currentValue) => accumulator + currentValue.taxAmount, 0);

    const addRowValue = () => {
        let copyAmountOfRows = [...tableRowsValues, {
                itemDescription:"",
                quantity:1,
                rate:0,
                taxPercentage:0,
                amount:0,
                taxAmount:0,
            }]
        setTableRowsValues(copyAmountOfRows);
    }

    useEffect(() => {
        addRowValue();
      }, []);

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
            <table className="table is-bordered is-pulled-right">
                <tbody>
                    <tr>
                        <td><h1>Sub total: </h1></td>
                        <td><h1>{subtotal}</h1></td>
                    </tr>
                    {tableRowsValues.map((row, i) => {
                        if(row.taxPercentage !== 0) {
                            return <tr key={`tax_key_${i}`}>
                                <td><h1>Tax: </h1></td>
                                <td><h1>{row.taxPercentage}%</h1></td>
                            </tr>
                        }
                        return null;
                    })} 
                    <tr>
                        <td className="is-selected"><h1>Total: </h1></td>
                        <td><h1>{total}</h1></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
  }
  
  export default Table;
  