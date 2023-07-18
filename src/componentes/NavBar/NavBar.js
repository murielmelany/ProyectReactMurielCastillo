
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
          <Navbar.Brand href="/">
            TodoBolsos
          </Navbar.Brand>
        </Container>
      </Navbar>
          <Nav className="NavBar">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/category/carteras">CARTERAS</NavDropdown.Item>
              <NavDropdown.Item href="/category/mochilas">MOCHILAS</NavDropdown.Item>
              <NavDropdown.Item href="/category/porta-notebooks">PORTA NOTEBOOKS</NavDropdown.Item>
              </NavDropdown>

          </Nav>
              <Cart/>
        </Container>
      </Navbar>
    )
}

export default NavBar;