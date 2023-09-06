import { useState } from "react";
import TableRows from "./TableRows";
import TableTotal from "./TableTotal";
import currencyToSymbolMap from 'currency-symbol-map/map'
import getSymbolFromCurrency from 'currency-symbol-map'

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

    const [currency, setCurrency] = useState(["USD", "$"]);

    const handleCurrencyChange = (event) => {
        let newCurrency = event.target.value;
        setCurrency([newCurrency, getSymbolFromCurrency(newCurrency)]);
    }

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
            <div className="select">
                <select onChange={handleCurrencyChange} defaultValue={currency[0]}>
                    {Object.entries(currencyToSymbolMap).map((value,key) => 
                        <option className="dropdown-item" key={key} value={value[0]}>
                            {value[0]} ({value[1]})
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
  }
  
  export default Table;
  