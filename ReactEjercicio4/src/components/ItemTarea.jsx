import { Button, ListGroup } from "react-bootstrap";

const ItemTarea = ({ tarea }) => {
  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between">
        {tarea}
        <Button variant="danger">
          <i className="bi bi-x"></i>
        </Button>
      </ListGroup.Item>
    </div>
  );
};

export default ItemTarea;
