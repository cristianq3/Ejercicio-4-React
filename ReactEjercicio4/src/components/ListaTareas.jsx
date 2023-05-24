import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

function ListaTareas() {
  return (
    <ListGroup>
   <ItemTarea tarea="Cambiar el aceite al auto"></ItemTarea>
   <ItemTarea tarea="Comprar los alimentos para la cena"></ItemTarea>
   <ItemTarea tarea="Peinar al Gato"></ItemTarea>
   <ItemTarea tarea="Regar las plantas"></ItemTarea>
    </ListGroup>
  );
}

export default ListaTareas;