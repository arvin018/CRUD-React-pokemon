import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import CardMenu from "../componets/Card";
import { fetchPokemon } from "../store/actions/action";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home() {
  const dispatch = useDispatch();

  const { pokemon, isloading } = useSelector((state) => state);

  
  useEffect(() => {
    dispatch(fetchPokemon());
  }, []);

  if (isloading) {
    return <div> ...Loading</div>;
  }
  return (
    <div>
      {
        
        // JSON.stringify(pokemon)
    }
      <h1> Home </h1>
      <Container>
        <Row>
          {pokemon.map((listData) => {
            return (
                <Col> <CardMenu key={listData.id} listData={listData} /> </Col>
            )
          })}
         
        </Row>
      </Container>
    </div>
  );
}

