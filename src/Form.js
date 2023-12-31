import { useState } from "react";

function Form({ formValue, setFormValue }) {
    const [showLogoUploaded, setShowLogoUploaded] = useState(true)

    const handleImageChange = (event) => {
        const copyFormValue = { ...formValue }
        copyFormValue.image = URL.createObjectURL(event.target.files[0]);;
        setFormValue(copyFormValue);
        setShowLogoUploaded(false);
    }

    const handleinvoiceIdChange = (event) => {
        const copyFormValue = { ...formValue }
        copyFormValue.invoiceId = event.target.value;
        setFormValue(copyFormValue);
    }

    const handleInvoiceDateChange = (event) => {
        const copyFormValue = { ...formValue };
        copyFormValue.invoiceDate = event.target.value;
        setFormValue(copyFormValue);
    }

    const handleinvoiceDueDateChange = (event) => {
        const copyFormValue = { ...formValue };
        copyFormValue.invoiceDueDate = event.target.value;
        setFormValue(copyFormValue);
    }

    const handlePersonalInformationChange = (event) => {
        const copyFormValue = { ...formValue }
        copyFormValue.personalInformation = event.target.value;
        setFormValue(copyFormValue);
    }

    const handleBillToChange = (event) => {
        const copyFormValue = { ...formValue }
        copyFormValue.billTo = event.target.value;
        setFormValue(copyFormValue);
    }

    return (
        <div className="my-6">
            <div className="columns is-centered">
                <div className="column has-text-centered">
                    {showLogoUploaded === true ?
                        <div className="file is-boxed" style={{ display: "block" }}>
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" onChange={handleImageChange} />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">
                                        Upload a Logo...
                                    </span>
                                </span>
                            </label>
                        </div>
                        :
                        <span>
                            <img src={formValue.image} style={{ maxHeight: "80px" }} alt="Invoizen - Invoice generator" />
                            <button onClick={() => setShowLogoUploaded(true)} className="delete"></button>
                        </span>
                    }
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label"># Invoice</label>
                        <div className="control">
                            <input
                                onChange={handleinvoiceIdChange}
                                className="input"
                                type="text"
                                maxLength={20}
                                placeholder="Invoice ID"
                            />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label">Invoice Date</label>
                        <div className="control">
                            <input
                                className="input"
                                onChange={handleInvoiceDateChange}
                                type="date"
                                value={formValue.invoiceDate}
                            />
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="field">
                        <label className="label">Due Date</label>
                        <div className="control">
                            <input
                                className="input"
                                onChange={handleinvoiceDueDateChange}
                                color="primary"
                                type="date"
                                value={formValue.invoiceDueDate}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column">
                    <div className="panel">
                        <p className="panel-heading">
                            Personal Information:
                        </p>
                        <div className="panel-block">
                            <textarea
                                className="textarea"
                                onChange={handlePersonalInformationChange}
                                placeholder="Who is this invoice from?">
                            </textarea>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="panel">
                        <p className="panel-heading">
                            Bill To:
                        </p>
                        <div className="panel-block">
                            <textarea
                                className="textarea"
                                onChange={handleBillToChange}
                                placeholder="Who is this invoice to?">
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
