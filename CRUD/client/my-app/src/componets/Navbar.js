import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function NavbarMenu() {
    const navigate = useNavigate()
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={()=>{ navigate('/')}}>Pokedex </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/')}} >Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/add')}} >Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
    </div>
  );
}
