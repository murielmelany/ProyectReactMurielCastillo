
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cart from './Cart/Cart';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <Navbar expand="lg" bg="light" data-bs-theme="light">
        <Container>
        <Navbar className="bg-body-tertiary">
        <Container>
        <Link to="/" className="nav-brand" style={{ textDecoration: 'none'}}>
        
          <Navbar.Brand>
          TodoBolsos
          </Navbar.Brand>
        </Link>
        </Container>
      </Navbar>
          <Nav className="NavBar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <Link className='dropdown-item' to="/category/carteras">CARTERAS</Link>
              <Link className='dropdown-item' to="/category/mochilas">MOCHILAS</Link>
              <Link className='dropdown-item' to="/category/porta-notebooks">PORTA NOTEBOOKS</Link>
            </NavDropdown>
          </Nav>
              <Cart/>
        </Container>
      </Navbar>
    )
}

export default NavBar;