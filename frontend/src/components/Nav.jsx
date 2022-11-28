import { useLocation } from "react-router-dom";
import logo from "../assets/logo-2.png";
import { Navbar, Button, Text, Image } from "@nextui-org/react";

const Nav = () => {
  const location = useLocation();
  return (
    <Navbar isBordered variant="static">
      <Navbar.Brand>
        <Image src={logo} width={65} height={65} />
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        {location.pathname === "/alumnos" ? (
          <>
            <Navbar.Link isActive href="/alumnos">Alumnos</Navbar.Link>
            <Navbar.Link href="/materias">Materias</Navbar.Link>
          </>
        ) : (
          <>
            <Navbar.Link href="/alumnos">Alumnos</Navbar.Link>
            <Navbar.Link isActive href="/materias">Materias</Navbar.Link>
          </>
        )}
      </Navbar.Content>
    </Navbar>
  );
};

export default Nav;
