import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteByIdPokemon } from "../store/actions/action";

export default function CardMenu({ listData }) {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handlerDelete = (e) => {
    e.preventDefault();
    dispatch(deleteByIdPokemon(listData.id));
  };

  const handelerEdit = (e) => {
    e.preventDefault();
    navigate(`/pokemon/edit/${listData.id}`);
  };

  const handelerDetail = (e) => {
    e.preventDefault();
    navigate(`/pokemon/${listData.id} `);
  };

  

  useEffect(() => {}, []);

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={listData.image} />
        <Card.Body>
          <Card.Title>{listData.name}</Card.Title>
          <Card.Text>{listData.description}</Card.Text>
          <Button variant="primary m-2" onClick={handelerDetail}>
            {" "}
            Detail
          </Button>

          <Button variant="warning m-2" onClick={handelerEdit}>
          {" "}
          Edit
        </Button>
          <Button variant="danger" onClick={handlerDelete}>
            {" "}
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
