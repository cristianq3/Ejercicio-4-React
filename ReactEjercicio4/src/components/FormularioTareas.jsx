import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

function Input() {
  return (
    <section> 
      <h1 className="display-3">Lista de Tareas</h1>
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
        <Form.Control type="text" placeholder="Ingrese la tarea" />
        <Button variant="warning" className="ms-2" type="submit">
        <i className="bi bi-plus"></i>
        </Button>
      </Form.Group>
    </Form>

    <ListaTareas></ListaTareas>
    </section>
  );
}

export default Input;
