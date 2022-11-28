import React, { useState } from 'react'
import imageLogin from "../assets/fondo-login-2.png"
import logo from "../assets/logo-2.png"
import { Container, Card, Row, Text, Col, Grid, Input, Image, Spacer, Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import axiosClient from '../config/axios';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleFormSubmit = async(event) => {
        event.preventDefault();
        
        if (!username.trim()) {
            console.log('Username is required');
            return;
        }

        if (!password.trim()) {
            console.log('Password is required.');
            return;
        }

        try {
            const { data } = await axiosClient.post('/auth/login', { username, password });
            localStorage.setItem('token', data.token);

            navigate('/');
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

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
                                <form action="" onSubmit={handleFormSubmit}>
                                    <Input 
                                        width="300px" 
                                        placeholder="Usuario" 
                                        name='username'
                                        value={username} 
                                        onChange={(event) => setUsername(event.target.value)}
                                    />
                                    <Spacer y={1} />
                                    <Input.Password 
                                        width="300px" 
                                        placeholder="Contraseña"
                                        name='password'
                                        value={password}
                                        onChange={event => setPassword(event.target.value)}
                                    />
                                    <Spacer y={2} />
                                    <Button size="lg" color="gradient" rounded type='submit'>Ingresar</Button>
                                </form>
                                <Spacer y={0.3}></Spacer>
                                <Text h6 css={{ textAlign: 'center', fontWeight: 'light' }}>¿Olvidaste tú contraseña?</Text>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </>
    )
}

export default Login;
