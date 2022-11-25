import React from 'react'
import { Navbar, Button, Text } from "@nextui-org/react";


const Home = () => {
  return (
    <Navbar isBordered variant='static'>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            MASTER PROF
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Alumnos</Navbar.Link>
          <Navbar.Link isActive href="#">Materias</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}

export default Home