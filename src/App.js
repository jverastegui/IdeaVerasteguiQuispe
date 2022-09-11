import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';





function App() {
  return (
    <div>
      <NavBar />
      <div className='container-fluid py-2' style={{ marginTop: '60px' }}>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Productos</h5>
            <ItemListContainer />
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Detalle</h5>
            <ItemDetailContainer></ItemDetailContainer>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
