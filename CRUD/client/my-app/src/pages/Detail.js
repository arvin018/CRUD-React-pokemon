import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemonId } from "../store/actions/action";

export default function Detail() {
  let { id } = useParams();
  let dispatch = useDispatch();
  const  {pokemonId}  = useSelector((state) => state);
  // console.log("====================================");
  // console.log(pokemonId);
  // console.log("====================================");
  useEffect(() => {
    dispatch(fetchPokemonId(id));
  }, []);
  return (
    <Container>
      <Row>
        <Col><img src={pokemonId.image} alt="" /></Col>
        <Col>name :{pokemonId.name}<br></br>
        type: {pokemonId.type}<br></br>
        weight: {pokemonId.weight}<br></br>
        description :{pokemonId.description}<br></br>
        </Col>
      </Row>
    </Container>
  );
}
