
import { Table } from 'react-bootstrap';

const Listado = ({data}) => {

const colaboradores = data.map((colaborador) => (
  <tr key={colaborador.id}>
    <td>{colaborador.id}</td>    
    <td>{colaborador.nombre}</td>
    <td>{colaborador.correo}</td>
    <td>{colaborador.edad}</td>
    <td>{colaborador.cargo}</td>
    <td>{colaborador.telefono}</td>    
    <td>       
      {/*boton eliminar agregar funcionalidad onclick*/}
    </td>
  </tr>

));


  return (
    <div className='tabla'>
      <Table
        variant="dark"
        className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody>{colaboradores} </tbody>
      </Table>
    </div>
  )
}

export default Listado