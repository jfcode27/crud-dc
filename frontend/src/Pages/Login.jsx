import React from 'react'
import imageLogin from "../assets/fondo-login-2.png"
import logo from "../assets/logo-2.png"
import { Container, Card, Row, Text, Col, Grid, Input, Image, Spacer, Button } from "@nextui-org/react";

export const Login = () => {
    return (
        <>
            <Grid css={{ height: '100vh' }}>
                <Row css={{ height: '100vh' }}>
                    <Col css={{ height: '100vh' }}>
                        <Image src={imageLogin} objectFit="cover" css={{ height: '100vh' }} />
                    </Col>
                    <Col css={{ height: '100vh' }}>
                        <Row justify='center' align='center'>
                            <Col justify='center' align='center'>
                                <Spacer y={4} />
                                <Image src={logo} width={220} height={80} />
                                <Spacer y={2} />
                                <Text h1 css={{ textAlign: 'center', fontWeight: 'bold' }}>Iniciar Sesión</Text>
                                <Spacer y={2} />
                                <Input width="300px" placeholder="Usuario" />
                                <Spacer y={1} />
                                <Input.Password width="300px" placeholder="Contraseña" />
                                <Spacer y={2} />
                                <Button size="lg" color="gradient" rounded>Ingresar</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default Login;
