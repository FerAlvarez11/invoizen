import { useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';
import 'bulma/css/bulma.min.css';
import Navbar from './Navbar';
import getSymbolFromCurrency from 'currency-symbol-map'

function App() {
    const [tableRowsValues, setTableRowsValues] = useState([{
            itemDescription:"",
            quantity:1,
            rate:0,
            taxPercentage:0,
            amount:0,
            taxAmount:0,
        }
    ]);

    const[formValue, setFormValue] = useState({
        image:"",
        invoiceNumber:0,
        invoiceDate:null,
        invoiceDueData:null,
        personalInformation:"",
        billTo:"",
    });
    
    const [currency, setCurrency] = useState(["USD", "$"]);

    const handleCurrencyChange = (event) => {
        let newCurrency = event.target.value;
        setCurrency([newCurrency, getSymbolFromCurrency(newCurrency)]);
    }

    return (
        <div className="container is-centered">
            <Navbar tableRowsValues={tableRowsValues} formValue={formValue} handleCurrencyChange={handleCurrencyChange} currency={currency}/>
            <Form formValue={formValue} setFormValue={setFormValue}/>
            <Table currency={currency} setTableRowsValues={setTableRowsValues} tableRowsValues={tableRowsValues}/>
        </div>
    );
}
export default App;
