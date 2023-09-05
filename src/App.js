import './App.css';
import Form from './Form';
import Table from './Table';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="container  is-max-desktop ">
      <Form/>
      <Table/>
      <button className='button is-success centered'>Submit</button>
    </div>
  );
}

export default App;
