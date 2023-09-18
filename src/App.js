import { useState } from 'react';
import './App.css';
import Form from './Form';
import Table from './Table';
import 'bulma/css/bulma.min.css';
import getSymbolFromCurrency from 'currency-symbol-map';
import Actions from './Actions';

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
        image:"invoizen/logoDefault_backup.jpg",
        invoiceId: null,
        invoiceDate: currentDate,
        invoiceDueDate: currentDate,
        personalInformation:null,
        billTo:null,
    });
   
    const subtotal = tableRowsValues.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0);
    const total = subtotal + tableRowsValues.reduce((accumulator, currentValue) => accumulator + currentValue.taxAmount, 0);

    const [currency, setCurrency] = useState(["USD", "$"]);

    const handleCurrencyChange = (event) => {
        let newCurrency = event.target.value;
        setCurrency([newCurrency, getSymbolFromCurrency(newCurrency)]);
    }

    return (
        <div className="hero">
            <div className='hero-head has-background-link has-text-centered'>
                <img src="/invoizen/logo.png" alt="Invoizen - Invoice generator"/>
            </div>
            <div className='hero-body pt-0'>
                <div className="container px-4">
                    <Form formValue={formValue} setFormValue={setFormValue}/>
                    <Table currency={currency} setTableRowsValues={setTableRowsValues} handleCurrencyChange={handleCurrencyChange} tableRowsValues={tableRowsValues} subtotal={subtotal} total={total}/>
                    <div className="hero-foot has-text-centered">
                        <Actions formValue={formValue} currency={currency} tableRowsValues={tableRowsValues} subtotal={subtotal} total={total}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default App;
