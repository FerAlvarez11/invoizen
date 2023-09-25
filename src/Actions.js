
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import InvoicePdf from "./InvoicePdf";
import { useState } from 'react';

function Actions({subtotal, tableRowsValues, total, currency, formValue}) {
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
    return (
        <div>
            <button className="button is-hidden-mobile" onClick={()=>setIsPreviewModalOpen(!isPreviewModalOpen)}>Preview</button>
            <PDFDownloadLink document={<InvoicePdf tableRowsValues={tableRowsValues} formValue={formValue} subtotal={subtotal} total={total} currency={currency}/>} fileName="invoice.pdf">
                <button className='button is-warning mx-2'>Download PDF</button>
            </PDFDownloadLink>                 
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

export default Actions;
