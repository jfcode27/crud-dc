import React from 'react'
import imageLogin from "../assets/fondo-login.png"
import logo from "../assets/logo.png"
import { Container, Card, Row, Text, Col, Grid, Input, Image } from "@nextui-org/react";

export const Login = () => {
    return (
        <>
            <Grid css={{height: '100vh'}}>
                <Row css={{height: '100vh'}}>
                    <Col css={{height: '100vh'}}>
                        <Image src={imageLogin} objectFit="cover" css={{height: '100vh'}}/>             
                    </Col>
                    <Col css={{height: '100vh'}}>
                        <Image src={{logo}}></Image>
                        <Text h2>Iniciar Sesión</Text>

                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default Login;
