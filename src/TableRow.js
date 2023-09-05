function TableRow({deleteRow, i, tableRowsValues, setTableRowsValues}) {

    const handleDeleteRow = () =>{
        deleteRow(i);
    }
    
    const handleItemDescriptionChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].itemDescription = event.target.value;
        setTableRowsValues(tableRowsValuesCopy);
    }

    const handleQuantityChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].quantity = event.target.value;
        tableRowsValuesCopy[i].amount = event.target.value * tableRowsValuesCopy[0].rate;
        setTableRowsValues(tableRowsValuesCopy);
    }     

    const handleRateChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].rate = event.target.value;
        tableRowsValuesCopy[i].amount = event.target.value * tableRowsValuesCopy[0].quantity;
        setTableRowsValues(tableRowsValuesCopy);
    }   

    const handleTaxPercentageChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].taxPercentage = event.target.value;
        tableRowsValuesCopy[i].taxAmount = tableRowsValuesCopy[i].amount * event.target.value / 100;
        console.log(tableRowsValuesCopy[i].taxAmount);
        setTableRowsValues(tableRowsValuesCopy);
    }   

    return (
        <tr>
            <td>
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Add an item description"
                    onChange={handleItemDescriptionChange}
                    value={tableRowsValues[i].itemDescription}
                    name="itemDescription"
                />
            </td>
            <td>
                <input 
                    className="input" 
                    type="number"
                    min="1"
                    placeholder="Add an item description"
                    onChange={handleQuantityChange}
                    value={tableRowsValues[i].quantity}
                    name="quantity"
                    
                />
            </td>
            <td>
                <input 
                    className="input" 
                    type="number" 
                    min="1"
                    placeholder="Add an item description"
                    onChange={handleRateChange}
                    value={tableRowsValues[i].rate}
                    name="rate"
                />
            </td>
            <td>
                <input 
                    className="input" 
                    type="number" 
                    min="1"
                    placeholder="Add an item description"
                    onChange={handleTaxPercentageChange}
                    value={tableRowsValues[i].taxPercentage}
                    name="taxPercentage"
                />
                <h1>({tableRowsValues[i].taxAmount})</h1>
            </td>
            <td>
                {tableRowsValues[i].amount}
            </td>
            <td>
                <button className="button" onClick={handleDeleteRow}>delete</button>
            </td>
        </tr>
    );
  }
  
  export default TableRow;
  