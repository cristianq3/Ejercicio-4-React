import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Input() {
  return (
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="tarea">
      
        <Form.Control type="text" placeholder="Ingrese la tarea" />      
        <Button variant="primary" type="submit">
       +
      </Button> 
      </Form.Group>    
  
    </Form>
  );
}

export default Input;