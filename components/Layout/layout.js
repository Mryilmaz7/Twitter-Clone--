import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import classes from "./layout.module.css"
import Navbar from "../Navbar/Navbar";

const Layout =(props)=>{
    return(
        <div className={classes.body}>
            <Container fluid>
                <Row>
                    <Col xs={0} s={3} md={2} lg={4} xl={4}><Navbar></Navbar></Col>
                    <Col xs={12} s={10} md={10} className={classes.columnTwo} lg={8} xl={5}>{props.children}</Col>
                    <Col className={classes.discover} md={0} lg={0} xl={3}>1 of 1</Col>
                </Row>
            </Container>
        </div>
    )

}
export default Layout