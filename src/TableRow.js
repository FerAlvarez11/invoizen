function TableRow({deleteRow, i, tableRowsValues, setTableRowsValues, currency}) {

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
        tableRowsValuesCopy[i].taxAmount = tableRowsValuesCopy[i].amount * tableRowsValuesCopy[i].taxPercentage / 100;
        setTableRowsValues(tableRowsValuesCopy);
    }     

    const handleRateChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].rate = event.target.value;
        tableRowsValuesCopy[i].amount = event.target.value * tableRowsValuesCopy[0].quantity;
        tableRowsValuesCopy[i].taxAmount = tableRowsValuesCopy[i].amount * tableRowsValuesCopy[i].taxPercentage / 100;
        setTableRowsValues(tableRowsValuesCopy);
    }   

    const handleTaxPercentageChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        tableRowsValuesCopy[i].taxPercentage = event.target.value;
        tableRowsValuesCopy[i].taxAmount = tableRowsValuesCopy[i].amount * event.target.value / 100;
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
            <td style={{width: "10%" }}>
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
            <td style={{width: "10%" }}>
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
            <td style={{width: "10%" }}>
                <p className="control has-icons-right">
                    <input 
                        className="input"
                        type="number" 
                        min="1"
                        placeholder="Add an item description"
                        onChange={handleTaxPercentageChange}
                        value={tableRowsValues[i].taxPercentage}
                        name="taxPercentage"
                    />
                    <span className="icon is-small is-right">
                        <i className="fas fa-percentage"></i>
                    </span>
                </p>                
            </td>
            <td>
                {currency[1]}{tableRowsValues[i].amount}
            </td>
            <td style={{width: "2%" }}>
                <button className="delete" onClick={handleDeleteRow}>delete</button>
            </td>
        </tr>
    );
  }
  
  export default TableRow;
  