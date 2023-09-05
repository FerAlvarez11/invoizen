import './App.css';
import Form from './Form';
import Table from './Table';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="container is-centered">
      <nav className="navbar is-link is-fixed-top">        
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button className='button'>Preview</button>
              <button className='button is-warning'>Download PDF</button>
            </div>
          </div>
        </div>
      </nav>
      <Form/>
      <Table/>
    </div>
  );
}

export default App;
