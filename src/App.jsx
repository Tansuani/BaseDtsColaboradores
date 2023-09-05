
import './App.css'
import Buscador from './Components/Buscador'
import Formulario from './Components/Formulario'
import Listado from './Components/Listado'

function App() {
  
  return (
    <>
      <div className='first'>
        <h1>Lista de colaboradores</h1>
        <Buscador/>
      </div>
      <div className='second'>
        <Listado/>
        <Formulario/>
      </div>
    </>
  )
}

export default App

