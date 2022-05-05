import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Link from 'next/link'
import React from 'react'

type PostEntryProps = {
    title: string,
    date: string,
    post: string,
}

const PostEntry = (props: PostEntryProps) => {
    return (
	<Card body>
	    <Container>
		<Row>
		    <Col>
			<Card.Title>{props.title}</Card.Title>
			<Card.Subtitle>{props.date}</Card.Subtitle>
		    </Col>
		    <Col className="align-items-center">
			<Link href={`/posts/${encodeURIComponent(props.post)}`} passHref>
			    <Button className="float-end">Read More</Button>
			</Link>
		    </Col>
		</Row>
	    </Container>
	</Card>
    )
}

export default PostEntry;
