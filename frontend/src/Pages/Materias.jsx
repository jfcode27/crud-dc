import React, { useEffect, useState } from "react";
import { Row, Col, Spacer, Button, Container, Table, Text } from "@nextui-org/react";
import Nav from "../components/Nav";
import MateriaModal from "../components/MateriaModal";
import axiosClient from '../config/axios';
import { useNavigate } from "react-router-dom";

const Materias = () => {
    const [subjects, setSubjects] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const [action, setAction] = React.useState("");
    const [selectedSubjectId, setSelectedSubjectId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
      const loadSubjects = async() => {
        const { data } = await axiosClient.get('/subjects');
        setSubjects(data);
      }

      loadSubjects();
    }, []);
    
    const columns = [
      { name: "NOMBRE", uid: "name" },
      { name: "MAESTRO", uid: "teacher" }
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
        default:
          return cellValue;
      }
    };

    const addSubject = () => {
      setVisible(true);
      setAction("Agregar");
    };

    const updateSubject = () => {
      setVisible(true);
      setAction("Editar");
    };

    const deleteSubject = async() => {
      if (selectedSubjectId) {
        await axiosClient.delete(`/subjects/${selectedSubjectId}`);
  
        navigate(0);
      }
    };

  return (
    <>
      <MateriaModal visible={visible} setVisible={setVisible} action={action}/>
      <Nav />
      <Spacer />
      <Container>
        <Row justify="flex-end">
          <Col span={2}>
            <Button size="sm" color="primary" ghost onPress={() => addSubject()}>
              Agregar
            </Button>
          </Col>
          <Col span={2}>
            <Button size="sm" color="primary" ghost onPress={() => updateSubject()}>
              Editar
            </Button>
          </Col>
          <Col span={2}>
            <Button size="sm" color="primary" ghost onPress={() => deleteSubject()}>
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
          selectionMode="single"
          onSelectionChange={(selected) => setSelectedSubjectId(selected.anchorKey)}
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
