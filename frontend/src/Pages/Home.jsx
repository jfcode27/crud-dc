import { Row, Col, Spacer, Button, Container, Table } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import AlumnoModal from "../components/AlumnoModal";
import Nav from "../components/Nav";

const Home = () => {
  const [visible, setVisible] = React.useState(false);
  const [action, setAction] = React.useState("");

  const agregarAlumno = () => {
    setVisible(true);
    setAction("Agregar");
  };

  const editarAlumno = () => {
    setVisible(true);
    setAction("Editar");
  };

  return (
    <>
      <AlumnoModal visible={visible} setVisible={setVisible} action={action} />
      <Nav />
      <Spacer />
      <Container>
        <Row justify="flex-end">
          <Col span={2}>
            <Button
              size="sm"
              color="primary"
              ghost
              onPress={() => agregarAlumno()}
            >
              Agregar
            </Button>
          </Col>
          <Col span={2}>
            <Button
              size="sm"
              color="primary"
              ghost
              onPress={() => editarAlumno()}
            >
              Editar
            </Button>
          </Col>
          <Col span={2}>
            <Button size="sm" color="primary" ghost>
              Eliminar
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
            <Table.Column>NOMBRE</Table.Column>
            <Table.Column>MATRÍCULA</Table.Column>
            <Table.Column>SEMESTRE</Table.Column>
            <Table.Column>ESCUELA</Table.Column>
            <Table.Column>DETALLE</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Pou</Table.Cell>
              <Table.Cell>12345</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>Universidad de La Salle Bajío</Table.Cell>
              <Table.Cell>
                <Link
                  to="/detalle"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  <Button size="sm" color="primary">
                    Detalle
                  </Button>
                </Link>
              </Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Pou 2</Table.Cell>
              <Table.Cell>12345</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>Universidad de La Salle Bajío</Table.Cell>
              <Table.Cell>
                <Button size="sm" color="primary">
                  Detalle
                </Button>
              </Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Pou 3</Table.Cell>
              <Table.Cell>12345</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>Universidad de La Salle Bajío</Table.Cell>
              <Table.Cell>
                <Button size="sm" color="primary">
                  Detalle
                </Button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};

export default Home;
