import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import _Navbar from './navbar'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

type PostProps = {
    title: String,
    children: JSX.Element,
}

const Post = (props: PostProps) => {
    return (
	<div>
	    <Head>
		<title>{props.title} - Jozef Jabczun&apos;s Blog</title>
		<link rel="icon" href="/favicon.ico" />
	    </Head>
	    <_Navbar />
	    <Container className="mt-3">
		<Row>
		    <Col/>
		    <Col sm={7}>
			<h2><b>{props.title}</b></h2><br/>
			{props.children}
		    </Col>
		    <Col/>
		</Row>
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
	</div>
    )
}

export default Post;
