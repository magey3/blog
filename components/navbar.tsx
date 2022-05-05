import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'

export default function _Navbar () {
    return (
	<Navbar collapseOnSelect variant="dark" bg="dark" expand="md">
	    <Container>
		<Navbar.Brand>Jozef Jabczun&apos;s Blog</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav" />
		<Navbar.Collapse id="basic-navbar-nav">
		    <Nav className="me-auto">
			<Link href="/" passHref>
			    <Nav.Link className="float-end">Home</Nav.Link>
			</Link>
		    </Nav>
		</Navbar.Collapse>
	    </Container>
	</Navbar>
    )
}
