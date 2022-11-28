import { Row, Col, Spacer, Button, Container, Table, Text } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DetalleModal from "../components/DetalleModal";
import Nav from "../components/Nav";
import axiosClient from "../config/axios";


const Detalle = () => {
  const { id } = useParams();

  const [visible, setVisible] = React.useState(false);
  const [action, setAction] = React.useState("");
  const [student, setStudent] = useState(null);
  const [selectedSubjectId, setSelectedSubjectId] = useState(null);
  const [gradeToUpdate, setGradeToUpdate] = useState(null);

  useEffect(() => {
    const getStudent = async() => {
      const { data } = await axiosClient.get(`/students/${id}`);
      setStudent(data);
    }

    getStudent();
  }, []);

  const columns = [
    // { name: "MATERIA", uid: "subject" },
    { name: "PRIMER PARCIAL", uid: "firstPartial" },
    { name: "SEGUNDO PARCIAL", uid: "secondPartial" },
    { name: "TERCER PARCIAL", uid: "thirdPartial" },
    { name: "PROMEDIO FINAL", uid: "finalGrade" },
  ];

  const renderCell = (user, columnKey) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      // case "subject":
      //   return (
      //     <Text>{cellValue.name}</Text>
      //   );
      case "firstPartial":
        return (
          <Text>{cellValue}</Text>
        );
      case "secondPartial":
        return (
          <Text>{cellValue}</Text>
        );
      case "thirdPartial":
        return (
          <Text>{cellValue}</Text>
        );
      case "finalGrade":
        return (
          <Text>{cellValue}</Text>
        );
      default:
        return cellValue;
    }
  };

  const assignSubject = () => {
    setVisible(true);
    setAction("Calificaciones");
  };

  const addGrades = () => {
    setVisible(true);
    setAction("Calificaciones");
  };

  const getGradeToUpdate = async() => {
    const { data } = await axiosClient.get(`/grades/${selectedSubjectId}`);
    setGradeToUpdate(data);
  }

  if (!student) {
    return null;
  }

  return (
    <>
      <DetalleModal visible={visible} setVisible={setVisible} action={action} student={student} gradeToUpdate={gradeToUpdate} />
      <Nav />
      <Spacer />
      <Container>
        <Row justify="flex-end">
          <Col span={8}>
            <h1>{student ? `${student.name} - ${student.enrollment}` : 'Alumno'}</h1>
          </Col>
          <Col span={2}>
            <Button
              size="sm"
              color="primary"
              ghost
              onPress={() => assignSubject()}
            >
              Asignar Materia
            </Button>
          </Col>
          <Col span={2}>
            <Button
              size="sm"
              color="primary"
              ghost
              onPress={() => addGrades()}
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
          selectionMode="single"
          onSelectionChange={(selected) => { setSelectedSubjectId(selected.anchorKey); getGradeToUpdate(selected.anchorKey); }}
          disallowEmptySelection
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
          <Table.Body items={student.grades}>
            {(item) => (
              <Table.Row>
                {(columnKey) => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
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
