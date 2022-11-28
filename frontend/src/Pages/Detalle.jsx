import { Row, Col, Spacer, Button, Container, Table } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import DetalleModal from "../components/DetalleModal";
import Nav from "../components/Nav";

const Detalle = () => {
  const [visible, setVisible] = React.useState(false);
  const [action, setAction] = React.useState("");

  const asignarMateria = () => {
    setVisible(true);
    setAction("Calificaciones");
  };

  const agregarCalificaciones = () => {
    setVisible(true);
    setAction("Materias");
  };

  return (
    <>
      <DetalleModal visible={visible} setVisible={setVisible} action={action} />
      <Nav />
      <Spacer />
      <Container>
        <Row justify="flex-end">
          <Col span={8}>
            <h1>Alumno</h1>
          </Col>
          <Col span={2}>
            <Button
              size="sm"
              color="primary"
              ghost
              onPress={() => asignarMateria()}
            >
              Asignar Materia
            </Button>
          </Col>
          <Col span={2}>
            <Button
              size="sm"
              color="primary"
              ghost
              onPress={() => agregarCalificaciones()}
            >
              Agregar calificaciones
            </Button>
          </Col>
        </Row>
      </Container>
      <Spacer />
      <Container>
        <Table
          aria-label="Example static collection table with multiple selection"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
          selectionMode="multiple"
        >
          <Table.Header>
            <Table.Column>MATERIA</Table.Column>
            <Table.Column>1ER PARCIAL</Table.Column>
            <Table.Column>2DO PARCIAL</Table.Column>
            <Table.Column>3ER PARCIAL</Table.Column>
            <Table.Column>PROMEDIO FINAL</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>INTRODUCCION AL POU</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>10</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        <Spacer />
        <Row justify="center">
          <Col span={2}>
            <Link to="/alumnos" style={{ textDecoration: "none", color: "white" }}>
              <Button size="lg" color="primary">
                Regresar
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Detalle;
