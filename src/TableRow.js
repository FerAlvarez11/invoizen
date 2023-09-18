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
        let filteredQuantityValue = event.target.value.replace(/\D/g,'');
        let quantityValueAsNumber = Number(filteredQuantityValue);
        tableRowsValuesCopy[i].quantity = quantityValueAsNumber;
        tableRowsValuesCopy[i].amount = quantityValueAsNumber * tableRowsValuesCopy[i].rate;
        tableRowsValuesCopy[i].taxAmount = tableRowsValuesCopy[i].amount * tableRowsValuesCopy[i].taxPercentage / 100;
        setTableRowsValues(tableRowsValuesCopy);
    }     

    const handleRateChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        let filteredRateValue = event.target.value.replace(/\D/g,'');
        let rateValueAsNumber = Number(filteredRateValue);
        tableRowsValuesCopy[i].rate = rateValueAsNumber;
        tableRowsValuesCopy[i].amount = rateValueAsNumber * tableRowsValuesCopy[i].quantity;
        tableRowsValuesCopy[i].taxAmount = tableRowsValuesCopy[i].amount * tableRowsValuesCopy[i].taxPercentage / 100;
        setTableRowsValues(tableRowsValuesCopy);
    }   

    const handleTaxPercentageChange = (event) => {
        const tableRowsValuesCopy = [...tableRowsValues];
        let filteredTaxValue = event.target.value.replace(/\D/g,'');
        let taxValueAsNumber = Number(filteredTaxValue);
        tableRowsValuesCopy[i].taxPercentage = taxValueAsNumber;
        tableRowsValuesCopy[i].taxAmount = tableRowsValuesCopy[i].amount * taxValueAsNumber / 100;
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
                    defaultValue ={tableRowsValues[i].itemDescription}
                    name="itemDescription"
                />
            </td>
            <td style={{width: "10%" }}>
                <input 
                    className="input" 
                    type="text"
                    min="1"
                    onChange={handleQuantityChange}
                    value={tableRowsValues[i].quantity}
                    name="quantity"                    
                />
            </td>
            <td style={{width: "10%" }}>
                <input 
                    className="input"
                    type="text" 
                    min="1"
                    onChange={handleRateChange}
                    value={tableRowsValues[i].rate}
                    name="rate"
                />
            </td>
            <td style={{width: "10%" }}>
                <p className="control has-icons-right">
                    <input 
                        className="input"
                        type="text" 
                        min="1"
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
  