import { Link, useNavigate } from 'react-router-dom'
import { Navbar, NavDropdown } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

export default function Header() {

    let user = JSON.parse(localStorage.getItem("user-info"));
    const navigate = useNavigate();

    function logout() {
        localStorage.clear();
        navigate("/register")
    }
    return (
        <div>

            <Navbar bg="dark" variant="dark">

                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto nav-bar-wrapper">
                    {
                        localStorage.getItem("user-info") ?
                            <>
                                <Link to="/">ProductList</Link>
                                <Link to="/add">AddProduct</Link>
                                {/* <Link to="/update">UpdateProduct</Link> */}
                                <Link to="/search">Search</Link>

                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>

                            </>

                    }


                </Nav>
                <Nav className="col-sm-1">
                    {

                        localStorage.getItem("user-info") ?
                            <NavDropdown title={user && user.name}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                            : null

                    }

                </Nav>

            </Navbar>
        </div>
    )
}