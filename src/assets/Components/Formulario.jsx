
const Formulario = () => {
  return (
    <div>
      <form className="planilla">
        <div class="form-group">
          <label for="exampleInputName">Nombre:</label>
          <input type="text" class="form-control" id="exampleInputName" placeholder="Inscriba el nombre"/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail">Correo:</label>
          <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Inscriba el correo"/>
        </div>
        <div class="form-group">
          <label for="exampleInputEdad">Edad:</label>
          <input type="number" class="form-control" id="exampleInputEdad" placeholder="Inscriba la edad"/>
        </div>
        <div class="form-group">
          <label for="exampleInputCargo">Cargo:</label>
          <input type="text" class="form-control" id="exampleInputCargo" placeholder="Inscriba el cargo"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPhone">Celular:</label>
          <input type="number" class="form-control" id="exampleInputPhone" placeholder="Digite el N. celular"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Formulario