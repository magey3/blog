import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';

import _Navbar from '../components/navbar'
import PostEntry from '../components/postentry'

const Home: NextPage = () => {
    return (
	<div>
	    <Head>
		<title>Jozef Jabczun's Blog</title>
		<link rel="icon" href="/favicon.ico" />
	    </Head>
	    <_Navbar />
	    <Container className="mt-3">
		<Row auto>
		    <Col/>
		    <Col sm={7}>
			<Stack gap="{3}">
			    <PostEntry title="Making this site" date="2022-5-5" href="/posts/makingthissite" />
			</Stack>

		    </Col>
		    <Col/>
		</Row>
		<Row/>
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

export default Home
