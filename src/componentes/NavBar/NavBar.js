
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './Cart/Cart';



const NavBar = () => {
    return(
        <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            TodoBolsos
          </Navbar.Brand>
        </Container>
      </Navbar>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CARTERAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">MOCHILAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">PORTA NOTEBOOKS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">ACCESORIOS</NavDropdown.Item>
              </NavDropdown>

          </Nav>
              <Cart/>
        </Container>
      </Navbar>
    )
}

export default NavBar;