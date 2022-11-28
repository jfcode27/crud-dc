import React, { useEffect, useState } from "react";
import { Row, Col, Spacer, Button, Container, Table, Text } from "@nextui-org/react";
import Nav from "../components/Nav";
import MateriaModal from "../components/MateriaModal";
import axiosClient from '../config/axios';

const Materias = () => {
    const [subjects, setSubjects] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const [action, setAction] = React.useState("");

    useEffect(() => {
      const loadSubjects = async() => {
        const { data } = await axiosClient.get('/subjects');
        setSubjects(data);
      }

      loadSubjects();
    }, []);
    
    const columns = [
      { name: "NOMBRE", uid: "name" },
      { name: "MAESTRO", uid: "teacher" },
      { name: "DETALLE", uid: "detail" }
    ];

    const renderCell = (user, columnKey) => {
      const cellValue = user[columnKey];
      switch (columnKey) {
        case "name":
          return (
            <Text>{cellValue}</Text>
          );
        case "teacher":
          return (
            <Text>{cellValue.name}</Text>
          );
        case "detail":
          return (
            <Button
              size="sm"
              color="primary"
            >
              Detalle
            </Button>
          );
        default:
          return cellValue;
      }
    };

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
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column
                key={column.uid}
                hideHeader={column.uid === "actions"}
                align={column.uid === "actions" ? "center" : "start"}
              >
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={subjects}>
            {(item) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Container>
    </>
  );
};

export default Materias;
