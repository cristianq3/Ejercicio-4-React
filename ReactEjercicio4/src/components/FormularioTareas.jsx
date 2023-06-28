import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

function FormularioTarea() {
  
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    //el filter devuelve un array con todas las coincidencias que tengan el nombre tarea
    let copiaDeTareas = tareas.filter((itemTarea) => itemTarea !== nombreTarea);
    
    setTareas = copiaDeTareas;
  };

  return (
    <section>
      <h1 className="display-3 mb-3">Lista de Tareas</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese la tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="warning" className="ms-2" type="submit">
            <i className="bi bi-plus"></i>
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
}

export default FormularioTarea;
