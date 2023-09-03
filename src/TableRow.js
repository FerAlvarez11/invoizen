function TableRow({deleteRow, i, tableRowsValues, setTableRowsValues}) {

    const handleDeleteRow = () =>{
        console.log(i)
        deleteRow(i);
    }
    
    const handleItemDescriptionChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].itemDescription = event.target.value;
        setTableRowsValues(tableRowsValuesCopy);
        // tableRowsValues[i].itemDescription = event.target.value;
        // setTableRowsValues(tableRowsValues);
    }

    const handleQuantityChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].quantity = event.target.value;
        setTableRowsValues(tableRowsValuesCopy);
        // tableRowsValues[i].amount = event.target.value * tableRowsValues[0].rate;
        // console.log(tableRowsValues[i].amount);
    }     

    const handleRateChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].rate = event.target.value;
        setTableRowsValues(tableRowsValuesCopy);
        // tableRowsValues[i].amount = event.target.value * tableRowsValues[0].quantity;
    }   

    const handleTaxChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].tax = event.target.value;
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
                    placeholder="Add an item description"
                    onChange={handleTaxChange}
                    value={tableRowsValues[i].tax}
                    name="tax"
                />
            </td>
            {/* <td>
                `hi${i}`
            </td> */}
            <td>
                <button className="button" onClick={handleDeleteRow}>delete</button>
            </td>
        </tr>
    );
  }
  
  export default TableRow;
  