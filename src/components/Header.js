import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
function Header() {
    return (
        <div className='container'>
            <nav className="nav">
  <a className="nav-link active" href="#">Active</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link disabled">Disabled</a>
</nav>
        </div>
    )
}

export default Header;