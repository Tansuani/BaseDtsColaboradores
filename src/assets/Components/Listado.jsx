import { Table } from 'react-bootstrap';

const Listado = () => {
  return (
    <div className='tabla'>
      <Table 
        variant="dark"
        className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Correo</th>
            <th scope="col">Edad</th>
            <th scope="col">Cargo</th>
            <th scope="col">Telefono</th>
            <th scope="col">Borrar</th>
          </tr>
        </thead>
        <tbody> </tbody>
      </Table>
    </div>
  )
}

export default Listado