import React, { useState, useEffect } from "react";
import { Row, Col, Spacer, Button, Container, Table, Text } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import AlumnoModal from "../components/AlumnoModal";
import Nav from "../components/Nav";
import axiosClient from '../config/axios';

const Home = () => {
    const [students, setStudents] = useState([]);
    const [visible, setVisible] = React.useState(false);
    const [action, setAction] = React.useState("");
    const [studentToUpdate, setStudentToUpdate] = useState(null);
    const [selectedStudentId, setSelectedStudentId] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
      const loadStudents = async() => {
        const { data } = await axiosClient.get('/students');
        setStudents(data);
      }

      loadStudents();
    }, []);
    
    const columns = [
      { name: "NOMBRE", uid: "name" },
      { name: "MATRÍCULA", uid: "enrollment" },
      { name: "SEMESTRE", uid: "semester" },
      { name: "ESCUELA", uid: "school" },
      { name: "DETALLE", uid: "detail" }
    ];

    const renderCell = (user, columnKey) => {
      const cellValue = user[columnKey];
      switch (columnKey) {
        case "name":
          return (
            <Text>{cellValue}</Text>
          );
        case "enrollment":
          return (
            <Text>{cellValue}</Text>
          );
        case "semester":
          return (
            <Text>{cellValue}</Text>
          );
        case "school":
          return (
            <Text>{cellValue}</Text>
          );
        case "detail":
          return (
            <Link
              to={`/detalle/${user.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button size="sm" color="primary">
                Detalle
              </Button>
            </Link>
          );
        default:
          return cellValue;
      }
    };

  const createStudent = () => {
    setStudentToUpdate(null);
    setVisible(true);
    setAction("Agregar");
  };
  
  const getStudentToUpdate = async(id) => {
    const { data } = await axiosClient.get(`/students/${id}`);
    setStudentToUpdate(data);
  };

  const updateStudent = () => {
    if (studentToUpdate) {
      setVisible(true);
      setAction("Editar");
    }
  };

  const deleteStudent = async () => {
    if (selectedStudentId) {
      await axiosClient.delete(`/students/${selectedStudentId}`);
      await axiosClient.get('/students');

      navigate(0);
    }
  };

  return (
    <>
      <AlumnoModal 
        visible={visible} 
        setVisible={setVisible} 
        action={action} 
        studentToUpdate={studentToUpdate}
        setStudentToUpdate={setStudentToUpdate}
      />

      <Nav />

      <Spacer />
      
      <Container>
        <Row justify="flex-end">
          <Col span={2}>
            <Button
              size="sm"
              color="primary"
              ghost
              onPress={() => createStudent()}
            >
              Agregar
            </Button>
          </Col>
          <Col span={2}>
            <Button
              size="sm"
              color="primary"
              ghost
              onPress={() => updateStudent()}
            >
              Editar
            </Button>
          </Col>
          <Col span={2}>
            <Button 
              size="sm" 
              color="primary" 
              ghost
              onPress={() => deleteStudent()}
            >
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
          onSelectionChange={(key) => { setSelectedStudentId(key.anchorKey); getStudentToUpdate(key.anchorKey)}}
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
          <Table.Body items={students}>
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

export default Home;
