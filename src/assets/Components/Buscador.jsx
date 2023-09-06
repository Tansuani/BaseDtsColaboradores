
const Buscador = ({data, dataBuscador}) => {

  const inputTexto = (e) => {
    const tomaTexto = e.target.value.toLowerCase();
    const respuesta = data.buscador ((colaborador) => 
    colaborador.nombre.toLowerCase().includes(tomaTexto) ||
    colaborador.correo.toLowerCase().includes(tomaTexto) ||
    colaborador.edad.toLowerCase().includes(tomaTexto) ||
    colaborador.cargo.toLowerCase().includes(tomaTexto) ||
    colaborador.telefono.toLowerCase().includes(tomaTexto)
    );
    dataBuscador(respuesta);
  };



  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="text"
            placeholder="Buscar colaborador"
            aria-label="Search"
            onChange={inputTexto}
          />{/*}
          <button 
            class="btn btn-outline-success my-2 my-sm-0" 
            type="submit">Buscar</button>*/}
        </form>
      </nav>
    </>
  )
}

export default Buscador