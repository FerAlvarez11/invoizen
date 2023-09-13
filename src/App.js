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

    let currentDate = new Date().toJSON().slice(0, 10);

    const[formValue, setFormValue] = useState({
        image:"logoDefault_backup.jpg",
        invoiceId: null,
        invoiceDate: currentDate,
        invoiceDueDate: currentDate,
        personalInformation:"",
        billTo:"",
    });
   
    const subtotal = tableRowsValues.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
    const total = subtotal + tableRowsValues.reduce((accumulator, currentValue) => accumulator + currentValue.taxAmount, 0);

    const [currency, setCurrency] = useState(["USD", "$"]);

    const handleCurrencyChange = (event) => {
        let newCurrency = event.target.value;
        setCurrency([newCurrency, getSymbolFromCurrency(newCurrency)]);
    }

    return (
        <div className="container is-centered">
            <Navbar tableRowsValues={tableRowsValues} formValue={formValue} handleCurrencyChange={handleCurrencyChange} currency={currency} subtotal={subtotal} total={total}/>
            <Form formValue={formValue} setFormValue={setFormValue}/>
            <Table currency={currency} setTableRowsValues={setTableRowsValues} tableRowsValues={tableRowsValues} subtotal={subtotal} total={total}/>
        </div>
    );
}
export default App;
