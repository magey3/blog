import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
	<Container>
	    <Row className="fixed-bottom">
		<Col/>
		<Col sm={7}>
		    Copyright (C) 2022 Jozef Jabczun
		    Site code is licensed under the MIT license. Posts are licensed under the CC-BY-NC-4.0 license.
		    See README.md on the <a href="https://github.com/magey3/blog">github</a> for details.
		</Col>
		<Col/>
	    </Row>
	</Container>
    )
}

export default Footer;
