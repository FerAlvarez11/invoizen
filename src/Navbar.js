import { PDFViewer } from "@react-pdf/renderer";
import { useState } from "react";
import InvoicePdf from "./InvoicePdf";
import currencyToSymbolMap from 'currency-symbol-map/map'

function Navbar({handleCurrencyChange, currency}){
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    console.log(isPreviewModalOpen);

    return(
        <div>
            <nav className="navbar is-link is-fixed-top">        
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
                    <button className='button is-warning'>Download PDF</button>
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
                            <PDFViewer style={{width : "100%", height: "100%"}}>
                                <InvoicePdf/>
                            </PDFViewer>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is-link">Download PDF</button>
                            <button onClick={()=>setIsPreviewModalOpen(!isPreviewModalOpen)} className="button">Cancel</button>
                        </footer>
                    </div>
                </div>       
            )}   
        </div>
    );
}

export default Navbar;