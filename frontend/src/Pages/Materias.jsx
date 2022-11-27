import React from "react";
import { Row, Col, Spacer, Button, Container, Table } from "@nextui-org/react";
import Nav from "../components/Nav";
import MateriaModal from "../components/MateriaModal";

const Materias = () => {
    const [visible, setVisible] = React.useState(false);
    const [action, setAction] = React.useState("");

    const agregarMateria = () => {
        setVisible(true);
        setAction("Agregar");
    }

    const editarMateria = () => {
        setVisible(true);
        setAction("Editar");
    }

  return (
    <>
      <MateriaModal visible={visible} setVisible={setVisible} action={action}/>
      <Nav />
      <Spacer />
      <Container>
        <Row justify="flex-end">
          <Col span={2}>
            <Button size="sm" color="primary" ghost onPress={() => agregarMateria()}>
              Agregar
            </Button>
          </Col>
          <Col span={2}>
            <Button size="sm" color="primary" ghost onPress={() => editarMateria()}>
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
            <Table.Column>FOLIO</Table.Column>
            <Table.Column>SEMESTRE</Table.Column>
            <Table.Column>ESCUELA</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Pou</Table.Cell>
              <Table.Cell>12345</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>Universidad de La Salle Bajío</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Pou 2</Table.Cell>
              <Table.Cell>12345</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>Universidad de La Salle Bajío</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Pou 3</Table.Cell>
              <Table.Cell>12345</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>Universidad de La Salle Bajío</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};

export default Materias;
