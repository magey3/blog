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
import Footer from '../components/footer'

const Home: NextPage = () => {
    return (
	<div>
	    <Head>
		<title>Jozef Jabczun&apos;s Blog</title>
		<link rel="icon" href="/favicon.ico" />
	    </Head>
	    <_Navbar />
	    <Container className="mt-3">
		<Row auto>
		    <Col/>
		    <Col sm={7}>
			<Stack gap={3}>
			    <PostEntry title="Making this site" date="2022-5-5" post="makingthissite"/>
			</Stack>

		    </Col>
		    <Col/>
		</Row>
		<Row/>
	    </Container>
	    <Footer />
	</div>
    )
}

export default Home
