

import Alert from './assets/Components/Alert';
import './App.css';
import Buscador from './assets/Components/Buscador';
import Formulario from './assets/Components/Formulario';
import Listado from './assets/Components/Listado';
import {BDColaboradores} from './BDColaboradores';
import { useState } from 'react';


function App() {
  const [data, setData] = useState (BDColaboradores);
  const [dataBuscador, setDataBuscador] = useState(data);

  
  const [alert, setAlert] = useState({
    texto:'',
    tipo:'',
    estado: false,
  });

  const addAlert = (newAlert) => {
    setAlert(newAlert);

    setTimeout(() => {
      setAlert({
        texto:'',
        tipo:'',
        estado: false,
      });
    }, 3000);
  }

  return (
    <>
      <div className='first'>
        <h1>Lista de colaboradores</h1>
        <Buscador
          data={data}
          dataBuscador={setDataBuscador}
        />
      </div>
      <div className='second'>
        <Listado data={data}
          setData={setData}
          dataBuscador={dataBuscador}
          setDataBuscador={setDataBuscador}
        />
        <Formulario
          addAlert={addAlert}
          data={data}
          setData={setData}
          dataBuscador={dataBuscador}
          setDataBuscador={setDataBuscador}
          />
      </div>
      <div className='third'>
        <Alert
          alerta={alert}/>
      </div>
    </>
  )
}

export default App

