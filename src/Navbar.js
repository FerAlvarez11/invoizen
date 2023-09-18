import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import InvoicePdf from "./InvoicePdf";
import currencyToSymbolMap from 'currency-symbol-map/map'

function Navbar({tableRowsValues, formValue, handleCurrencyChange, currency, subtotal, total}){
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

    return(
        <div>
            <nav className="navbar is-link is-fixed-top">     
                <div className="navbar-brand">                  
                    <img src="/invoizen/logo.png" alt="Invoizen - Invoice generator" style={{marginLeft:"10px"}}/>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                    <div className="select mr-2">
                        <select onChange={handleCurrencyChange} defaultValue={currency[0]}>
                            {Object.entries(currencyToSymbolMap).map((value,key) => 
                                <option className="dropdown-item" key={key} value={value[0]}>
                                    {value[0]} ({value[1]})
                                </option>
                            )}
                        </select>
                    </div>
                    <div className="buttons">
                        <button className='button' onClick={()=>setIsPreviewModalOpen(!isPreviewModalOpen)}>Preview</button>
                        <PDFDownloadLink document={<InvoicePdf tableRowsValues={tableRowsValues} formValue={formValue} subtotal={subtotal} total={total} currency={currency}/>} fileName="invoice.pdf">
                            <button className='button is-warning'> Download PDF</button>
                        </PDFDownloadLink>                 
                    </div>
                    </div>
                </div>
            </nav>
            {isPreviewModalOpen && (     
                <div className="modal is-active">
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                        <p className="modal-card-title">Preview PDF</p>
                        <button onClick={()=>setIsPreviewModalOpen(!isPreviewModalOpen)} className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body" style={{width : "100%", height: "1000px"}}>
                            <PDFViewer style={{width : "100%", height: "100%", showToolbar:"false"}}>
                                <InvoicePdf tableRowsValues={tableRowsValues} formValue={formValue} subtotal={subtotal} total={total} currency={currency}/>
                            </PDFViewer>
                        </section>
                        <footer className="modal-card-foot">
                            <PDFDownloadLink document={<InvoicePdf tableRowsValues={tableRowsValues} formValue={formValue} subtotal={subtotal} total={total} currency={currency}/>} fileName="invoice.pdf">
                                <button className='button is-link mr-2'> Download PDF</button>
                            </PDFDownloadLink>    
                            <button onClick={()=>setIsPreviewModalOpen(!isPreviewModalOpen)} className="button">Cancel</button>
                        </footer>
                    </div>
                </div>       
            )}   
        </div>
    );
}

export default Navbar;