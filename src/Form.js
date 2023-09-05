function Form() {
  return (
    <div className="m-6">
        <div className="columns">
            <div className="column">
                <div className="file is-boxed">
                    <label className="file-label">
                        <input className="file-input" type="file" name="resume"/>
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
            </div>
            <div className="column">
                <div className="field">
                    <label className="label">Invoice#</label>
                    <div className="control">
                        <input className="input" type="text" placeholder="Invoice number"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label className="label">Invoice Date</label>
                    <div className="control">
                        <input className="input" type="date" placeholder="Text input"/>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="field">
                    <label className="label">Due Date</label>
                    <div className="control">
                        <input className="input" color="primary" type="date" placeholder="Text input"/>
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
                        <textarea className="textarea" placeholder="Who is this invoice from?"></textarea>
                    </div>
                </div>
            </div>
            <div className="column">
                <div className="panel">
                    <p className="panel-heading">
                        Bill To:
                    </p>
                    <div className="panel-block">                      
                        <textarea className="textarea" placeholder="Who is this invoice to?"></textarea>
                    </div>         
                </div>
            </div>
        </div>
    </div>
  );
}

export default Form;
