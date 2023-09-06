
import {useState} from 'react';

const Formulario = ({data, setData, dataBuscador, setDataBuscador,addAlert}) => {
  const[datosColaborador, setDatosColaborador] = useState({
    nombre:'',
    correo:'',
    edad:'',
    cargo:'',
    telefono:'',
  });
  
  const handleInputs = (e) => {

    const inputsId={
      InputName:"nombre",
      InputEmail:"correo",
      InputEdad:"edad",
      InputCargo:"cargo",
      InputPhone:"telefono",      
    };

    const prop = inputsId[e.target.id]
    if(prop){
      setDatosColaborador({...datosColaborador, [prop]: e.target.value});
    }

  };

  const validarDatos = (e) => {
    e.preventDefault()
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
    
    const regexTelef = /^[0-9]{9}$/;
    if (
      datosColaborador.nombre.trim() === '' ||
      datosColaborador.correo === '' ||
      datosColaborador.edad === '' ||
      datosColaborador.cargo.trim() === '' ||
      datosColaborador.telefono === ''
    ){
      addAlert({

      })
    } else if(!regexEmail.test(datosColaborador.correo)){
      addAlert({})
    }
  
  //setData

  //setDataFilter

  //setDataColaborador


  };

  
  return (
    <div>
      <form className="planilla"
      onSubmit={(e) => validarDatos(e)}
      >
        <div className="form-group">
          <label for="exampleInputName">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            placeholder="Inscriba el nombre"
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.nombre}
            />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail">Correo:</label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="Inscriba el correo"
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.correo}
            />
        </div>
        <div className="form-group">
          <label for="exampleInputEdad">Edad:</label>
          <input
            type="number"
            className="form-control"
            id="InputEdad"
            placeholder="Inscriba la edad"
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.edad}
            />
        </div>
        <div className="form-group">
          <label for="exampleInputCargo">Cargo:</label>
          <input
            type="text"
            className="form-control"
            id="InputCargo"
            placeholder="Inscriba el cargo"
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.cargo}
            />
        </div>
        <div className="form-group">
          <label for="exampleInputPhone">Celular:</label>
          <input
            type="number"
            className="form-control"
            id="InputPhone"
            placeholder="Digite el N. celular"
            onChange={(e) => handleInputs(e)}
            value={datosColaborador.telefono}
            />
        </div>
        <button type="submit" className="btn btn-primary">Sumar Colaborador</button>
      </form>
    </div>
  )
}

export default Formulario